import Container from '../ui/Container';

const photos = [
  { src: '/images/first-day/IMG_0206.JPG', alt: 'Kids enjoying food at Project First Day event' },
  { src: '/images/serve-day/Apr2022Serve5.JPG', alt: 'Kids playing on bounce house at Searcy Serve Day' },
  { src: '/images/first-day/IMG_0198.JPG', alt: 'Cub Scout and sister smiling at community event' },
  { src: '/images/serve-day/Apr2022Serve4.JPG', alt: 'Group of children at Searcy Serve Day' },
  { src: '/images/first-day/IMG_0190.JPG', alt: 'Boy with backpack at Project First Day cookout' },
  { src: '/images/serve-day/Apr2022Serve3.JPG', alt: 'Community members at Searcy Serve Day' },
];

export default function PhotoGallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Community in Action
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          From back-to-school drives to neighborhood serve days, see the impact
          your support makes in the lives of children and families.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
