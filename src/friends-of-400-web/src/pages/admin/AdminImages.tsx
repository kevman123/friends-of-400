import { useState, useEffect, useRef } from 'react';
import Container from '../../components/ui/Container';
import Modal from '../../components/ui/Modal';
import { getAdminImages, uploadAdminImage, deleteAdminImage } from '../../services/api';
import type { AdminImage } from '../../types';

const IMAGE_CATEGORIES = ['general', 'events', 'programs', 'community', 'sponsors'];

export default function AdminImages() {
  const [images, setImages] = useState<AdminImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [altText, setAltText] = useState('');
  const [category, setCategory] = useState('general');
  const [dragOver, setDragOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState<AdminImage | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getAdminImages().then(setImages);
  }, []);

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError('');
    setUploading(true);

    try {
      const uploaded: AdminImage[] = [];
      for (const file of Array.from(files)) {
        const img = await uploadAdminImage(file, altText, category);
        uploaded.push(img);
      }
      setImages((prev) => [...uploaded, ...prev]);
      setAltText('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAdminImage(id);
      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Delete failed');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleUpload(e.dataTransfer.files);
  };

  return (
    <Container className="py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Images</h1>

      {/* Upload form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Images</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="altText" className="block text-sm font-medium text-gray-700 mb-1">
              Alt Text
            </label>
            <input
              id="altText"
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Describe the image"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
            >
              {IMAGE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            dragOver ? 'border-brand-green bg-green-50' : 'border-gray-300'
          }`}
        >
          <div className="text-gray-500 mb-2">
            {uploading ? (
              <span className="text-brand-green font-medium">Uploading...</span>
            ) : (
              <>Drag & drop images here, or</>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleUpload(e.target.files)}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="inline-flex items-center px-4 py-2 bg-brand-green text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-green-600 transition-colors"
          >
            Browse Files
          </label>
          <p className="text-xs text-gray-400 mt-2">JPG, PNG, GIF, WebP, SVG up to 10 MB</p>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>
        )}
      </div>

      {/* Image grid */}
      {images.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No images uploaded yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group"
            >
              <div className="aspect-video bg-gray-100 relative cursor-pointer" onClick={() => setSelectedImage(img)}>
                <img
                  src={img.url}
                  alt={img.altText || img.fileName}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(img.id); }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-red-600"
                  title="Delete image"
                >
                  &times;
                </button>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 truncate">{img.altText || img.fileName}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 capitalize">
                    {img.category}
                  </span>
                  <span className="text-xs text-gray-400">{img.uploadedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full image modal */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} className="max-w-2xl">
        {selectedImage && (
          <div>
            <img
              src={selectedImage.url}
              alt={selectedImage.altText || selectedImage.fileName}
              className="w-full rounded-t-2xl"
            />
            <div className="p-5">
              <p className="font-medium text-gray-900">{selectedImage.altText || selectedImage.fileName}</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 capitalize">
                  {selectedImage.category}
                </span>
                <span>{selectedImage.uploadedAt}</span>
              </div>
              <a
                href={selectedImage.url}
                download={selectedImage.fileName}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-brand-green text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors no-underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
                Download
              </a>
            </div>
          </div>
        )}
      </Modal>
    </Container>
  );
}
