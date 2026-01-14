import Image from 'next/image';
import Button from '../components/ui/button';
import Card from '../components/ui/card';

const IMAGES: string[] = [
  'https://i0.wp.com/badge.facebook.com/badge/599213760135297.2645.1872678278.png?w=750&ssl=1',
  'https://i0.wp.com/www.ridgefieldlions.org/wp-content/uploads/2025/12/20251212_164809-scaled.jpg?resize=750%2C400&ssl=1',
  'https://i0.wp.com/www.ridgefieldlions.org/wp-content/uploads/2024/07/Blind-and-Low-Vision-Infant-Toddler-Quilts--scaled.jpg?resize=750%2C400&ssl=1',
  'https://i0.wp.com/www.ridgefieldlions.org/wp-content/uploads/2024/12/RF-Lions-at-Turkey-Box-Event-2024-A-1.jpeg?resize=750%2C400&ssl=1',
  'https://i0.wp.com/www.ridgefieldlions.org/wp-content/uploads/2024/12/ilani-festival-photo-scaled.jpg?resize=750%2C400&ssl=1',
  'https://i0.wp.com/www.ridgefieldlions.org/wp-content/uploads/2025/06/Lions-Scholarship-Winners-2025.jpg?resize=750%2C400&ssl=1',
  'https://i0.wp.com/www.ridgefieldlions.org/wp-content/uploads/2024/12/Shannon-Schick-with-Toys-2024-B-scaled.jpeg?resize=750%2C400&ssl=1',
  '/generated/generated-team_photo-1768381174883.png',
  '/generated/generated-program_vision_screening-1768381205615.png',
  '/generated/generated-donation_closeup-1768381260605.png',
  '/generated/generated-testimonial_headshot-1768381288582.png'
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="hero" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Ridgefield, WA</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Ridgefield Lions Club</h1>
            <p className="mt-4 text-lg text-muted-foreground">Ridgefield, WA - We Serve</p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="https://ridgefieldlions.square.site/" variant="primary">Donate</Button>
              <Button href="https://www.ridgefieldlions.org/volunteer_opportunities/" variant="secondary">Volunteer Now</Button>
            </div>
          </div>

          <div className="mt-12 hero-image">
            <Image
              src={encodeURI(IMAGES[1])}
              alt="Lions Support to Shop with a Cop 2025"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Announcements / News */}
      <section id="news" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Announcements</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest News & Posts</h2>
            <p className="mt-4 text-lg text-muted-foreground">Recent posts and community updates from the Ridgefield Lions Club.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-semibold">DRIVE &amp; DROP COMMUNITY FOOD DRIVE</h3>
              <p className="mt-2 text-sm text-muted-foreground">The annual Walk &amp; Knock Food Drive will be replaced by DRIVE &amp; DROP was Saturday, Dec. 6th. However, we are still collecting food at: Rosauers Supermarket, Riverview Bank and Les Schwab in Ridgefield and at ilani Casino. The need for food is huge this year, so please consider a gift of food and/or monetary gift. Thank you.</p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold">Join the Ridgefield Lions</h3>
              <p className="mt-2 text-sm text-muted-foreground">Join the Ridgefield Lions and Help Make a Difference. Go to www.ridgefieldlions.org to find out how you could join this growing service club that is making a difference in our community.</p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold">Lions Unite in offering $40,000 in Scholarship</h3>
              <p className="mt-2 text-sm text-muted-foreground">Lions 2025 Scholarship recipients. Scholarships are made possible from funds raised by Lions and contributions from individual Lions Club members.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs / What We Do */}
      <section id="programs" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">What We Do</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Community Programs & Assistance</h2>
            <p className="mt-4 text-lg text-muted-foreground">Vision and hearing assistance, scholarships, events and local fundraising to support Ridgefield residents.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Image src={encodeURI(IMAGES[2])} alt="Blind and Low Vision infant toddler quilts" width={800} height={533} className="w-full h-auto img-rounded" unoptimized />
              <h4 className="mt-4 font-semibold">Vision Support</h4>
              <p className="mt-2 text-sm text-muted-foreground">Lions Create opportunities for blind/visually impaired infants to explore sensory quilts made by Lion Phyllis Hyatt.</p>
            </Card>

            <Card>
              <Image src={encodeURI(IMAGES[3])} alt="Lions Thanksgiving baskets contribution" width={800} height={533} className="w-full h-auto img-rounded" unoptimized />
              <h4 className="mt-4 font-semibold">Community Service</h4>
              <p className="mt-2 text-sm text-muted-foreground">Lions contributions to the Cliff Clark Thanksgiving Box project. Through a series of checks the Ridgefield Lions contributed $5,540 to Compassion 360.</p>
            </Card>

            <Card>
              <Image src={encodeURI(IMAGES[4])} alt="ilani festival volunteers" width={800} height={533} className="w-full h-auto img-rounded" unoptimized />
              <h4 className="mt-4 font-semibold">Events & Fundraising</h4>
              <p className="mt-2 text-sm text-muted-foreground">Lions Take Pride in Assisting ilani Casino with their Holiday Ale and Crafts Festival.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Photos</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Community Gallery</h2>
            <p className="mt-4 text-lg text-muted-foreground">Selected photos from recent events and activities.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {(Array.isArray(IMAGES) ? IMAGES : []).map((src, idx) => (
              <div key={src} className="overflow-hidden rounded-xl shadow-sm">
                <Image src={encodeURI(src)} alt={
                  idx === 0 ? 'Ridgefield Lions Facebook badge' :
                  idx === 1 ? 'Lions Support to Shop with a Cop 2025' :
                  idx === 2 ? 'Blind and Low Vision Infant Toddler Quilts' :
                  idx === 3 ? 'RF Lions at Turkey Box Event 2024' :
                  idx === 4 ? 'ilani festival photo' :
                  idx === 5 ? 'Lions Scholarship Winners 2025' :
                  idx === 6 ? 'Shannon Schick with Toys 2024' :
                  idx === 7 ? 'Team photo' :
                  idx === 8 ? 'Vision screening program' :
                  idx === 9 ? 'Donation closeup' : 'Testimonial headshot'
                } width={600} height={400} className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meetings & Contact */}
      <section id="contact" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Meetings & Contact</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meeting Schedules & Locations</h2>
            <p className="mt-4 text-lg text-muted-foreground">Breakfast / Business Meeting: 2nd Tuesday of each month at 6:45 – 8 am Rosauers Supermarket Coffee Shop 101-S. 47th Ave Ridgefield, WA 98642. Business Meeting: 4th Wednesday of each month at 6:30 -8 pm Ridgefield Administrative and Civic Center (RACC) 510 Pioneer St., Ridgefield, WA 98642.</p>
          </div>

          <div className="mt-12 mx-auto max-w-xl text-center">
            <address className="not-italic text-sm text-muted-foreground">For contact: see the Contact Us page for details.</address>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="https://www.ridgefieldlions.org/contact-us/" variant="secondary">Contact Us</Button>
              <Button href="https://www.ridgefieldlions.org/meeting-minutes/" variant="secondary">Meeting Minutes</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
