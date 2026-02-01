import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Dog, Cat } from "lucide-react"

// This would normally come from a database
const getArticle = (id: string) => {
  const articles = [
    {
      id: 1,
      title: "Essential Grooming Tips for Your Dog",
      excerpt: "Learn the proper techniques for brushing, bathing, and maintaining your dog's coat for optimal health.",
      category: "Dogs",
      image: "/images/dog-grooming.jpeg",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2023",
      readTime: "5 min read",
      content: `
        <h2>Why Grooming is Important for Dogs</h2>
        <p>Regular grooming is essential for your dog's health and well-being. It helps remove loose hair, dirt, and dander, prevents matting, distributes natural oils throughout the coat, and gives you a chance to check for any abnormalities like skin issues, lumps, or parasites.</p>
        
        <h2>Essential Grooming Tools</h2>
        <p>Before you start grooming your dog, make sure you have the right tools:</p>
        <ul>
          <li>Brush appropriate for your dog's coat type</li>
          <li>Dog-specific shampoo and conditioner</li>
          <li>Nail clippers or grinder</li>
          <li>Ear cleaning solution</li>
          <li>Cotton balls</li>
          <li>Toothbrush and dog toothpaste</li>
          <li>Grooming scissors</li>
          <li>Grooming table or non-slip surface</li>
        </ul>
        
        <h2>Brushing Techniques</h2>
        <p>Different coat types require different brushing techniques:</p>
        <ul>
          <li><strong>Short-haired dogs:</strong> Use a rubber brush or grooming mitt once a week.</li>
          <li><strong>Medium-haired dogs:</strong> Use a slicker brush followed by a metal comb twice a week.</li>
          <li><strong>Long-haired dogs:</strong> Use a slicker brush and metal comb daily to prevent mats.</li>
          <li><strong>Double-coated dogs:</strong> Use an undercoat rake during shedding seasons, followed by a slicker brush.</li>
        </ul>
        
        <h2>Bathing Your Dog</h2>
        <p>Most dogs only need a bath every 1-3 months, unless they get particularly dirty or have skin conditions. Here's how to give your dog a proper bath:</p>
        <ol>
          <li>Brush your dog thoroughly before bathing to remove loose hair and mats.</li>
          <li>Use lukewarm water and wet your dog's coat completely.</li>
          <li>Apply dog shampoo and lather gently, avoiding the eyes and ears.</li>
          <li>Rinse thoroughly until the water runs clear.</li>
          <li>Apply conditioner if needed, especially for long-haired breeds.</li>
          <li>Rinse completely.</li>
          <li>Towel dry and allow your dog to shake off excess water.</li>
          <li>Use a blow dryer on a low, cool setting if your dog tolerates it, or allow to air dry in a warm area.</li>
        </ol>
        
        <h2>Nail Trimming</h2>
        <p>Trim your dog's nails every 3-4 weeks. If you can hear the nails clicking on the floor, they're too long. Be careful not to cut into the quick (the pink part visible in light-colored nails), as this can cause bleeding and pain.</p>
        
        <h2>Ear Cleaning</h2>
        <p>Check your dog's ears weekly for dirt, wax buildup, or signs of infection. Clean as needed with a dog ear cleaning solution and cotton balls. Never insert anything into the ear canal.</p>
        
        <h2>Dental Care</h2>
        <p>Brush your dog's teeth daily if possible, or at least 2-3 times per week, using a dog-specific toothpaste. Never use human toothpaste, as it can be toxic to dogs.</p>
        
        <h2>Professional Grooming</h2>
        <p>Consider professional grooming every 4-8 weeks for breeds that require haircuts or have high-maintenance coats. Professional groomers can also handle tasks like anal gland expression and thorough ear cleaning.</p>
        
        <h2>Making Grooming a Positive Experience</h2>
        <p>Start grooming your dog from a young age to get them used to the process. Use treats, praise, and patience to create positive associations. Keep sessions short at first and gradually increase the time as your dog becomes more comfortable.</p>
      `,
    },
    {
      id: 2,
      title: "Spa Day at Home: Pampering Your Cat",
      excerpt:
        "Create a relaxing spa experience for your feline friend with these safe and enjoyable grooming techniques.",
      category: "Cats",
      image: "/images/cat-spa.jpeg",
      author: "Feline Specialist Emma",
      date: "April 2, 2023",
      readTime: "7 min read",
      content: `
        <h2>Creating a Relaxing Spa Experience for Your Cat</h2>
        <p>While cats are known for their self-grooming abilities, they can still benefit from some extra pampering. A home spa day can help keep your cat's coat healthy, reduce hairballs, and strengthen your bond. Here's how to create a relaxing spa experience that even the most particular feline will enjoy.</p>
        
        <h2>Setting the Right Environment</h2>
        <p>Before beginning your cat's spa treatment, create a calm environment:</p>
        <ul>
          <li>Choose a quiet time when your home is peaceful</li>
          <li>Select a warm, comfortable location</li>
          <li>Play soft, calming music</li>
          <li>Use feline pheromone products like Feliway to reduce stress</li>
          <li>Have all supplies ready before bringing your cat to the area</li>
        </ul>
        
        <h2>Gentle Brushing Session</h2>
        <p>Brushing is the foundation of any cat spa day:</p>
        <ul>
          <li><strong>Short-haired cats:</strong> Use a soft bristle brush or rubber grooming tool once or twice a week.</li>
          <li><strong>Medium-haired cats:</strong> Use a slicker brush followed by a metal comb 2-3 times a week.</li>
          <li><strong>Long-haired cats:</strong> Use a wide-toothed comb followed by a slicker brush daily to prevent mats.</li>
        </ul>
        <p>Always brush in the direction of hair growth, using gentle strokes. Pay special attention to areas prone to matting like behind the ears, under the legs, and the belly.</p>
        
        <h2>Massage Techniques</h2>
        <p>Cats love gentle massage, which can help relax muscles and improve circulation:</p>
        <ul>
          <li>Start with slow strokes along the back</li>
          <li>Gently massage the base of the ears with your fingertips</li>
          <li>Use circular motions around the cheeks and forehead</li>
          <li>Carefully knead the shoulders and neck</li>
          <li>Only massage areas your cat enjoys—watch for purring and relaxed body language</li>
        </ul>
        
        <h2>Bathing (For Cats Who Tolerate It)</h2>
        <p>Most cats don't need regular baths, but if your cat tolerates water or has gotten into something sticky:</p>
        <ol>
          <li>Place a rubber mat in the sink or tub to prevent slipping</li>
          <li>Use lukewarm water (never hot)</li>
          <li>Wet your cat from the neck down, avoiding the head</li>
          <li>Use a cat-specific shampoo, lathering gently</li>
          <li>Rinse thoroughly until water runs clear</li>
          <li>Wrap in a warm towel immediately</li>
          <li>Keep your cat in a warm room until completely dry</li>
        </ol>
        
        <h2>Paw Care</h2>
        <p>Pamper your cat's paws with these steps:</p>
        <ul>
          <li>Gently examine pads for any cuts or foreign objects</li>
          <li>Trim the tips of sharp claws (avoid the pink quick)</li>
          <li>Apply a small amount of pet-safe paw balm for dry pads</li>
        </ul>
        
        <h2>Eye and Ear Care</h2>
        <p>Complete the spa experience with gentle eye and ear cleaning:</p>
        <ul>
          <li>Wipe the corners of eyes with a soft, damp cloth to remove any discharge</li>
          <li>Check ears for wax buildup or signs of infection</li>
          <li>For visibly dirty ears, use a cat-specific ear cleaner on a cotton ball (never insert anything into the ear canal)</li>
        </ul>
        
        <h2>Finishing Touches</h2>
        <p>End your cat's spa day with:</p>
        <ul>
          <li>A final gentle brush through the coat</li>
          <li>A spritz of cat-safe coat conditioner for shine (optional)</li>
          <li>A special treat as a reward</li>
          <li>Plenty of praise and affection</li>
        </ul>
        
        <h2>When to Seek Professional Help</h2>
        <p>Consider professional grooming if your cat has severe matting, is elderly or has mobility issues, or becomes extremely stressed during home grooming sessions. For cats who don't tolerate grooming well, start with very short sessions and gradually increase duration as they become more comfortable.</p>
      `,
    },
    {
      id: 3,
      title: "Bathing Your Dog: A Complete Guide",
      excerpt:
        "Everything you need to know about bathing your dog, from frequency to techniques and product recommendations.",
      category: "Dogs",
      image: "/images/dog-bath.jpeg",
      author: "Pet Groomer Mark",
      date: "February 28, 2023",
      readTime: "6 min read",
      content: `
        <h2>How Often Should You Bathe Your Dog?</h2>
        <p>The frequency of baths depends on your dog's breed, coat type, activity level, and health. As a general guideline:</p>
        <ul>
          <li><strong>Dogs with oily coats</strong> (like Basset Hounds): Every 1-2 weeks</li>
          <li><strong>Dogs with water-repellent coats</strong> (like Golden Retrievers): Every 4-6 weeks</li>
          <li><strong>Dogs with thick double coats</strong> (like Huskies): Every 6-8 weeks</li>
          <li><strong>Short-haired, smooth-coated dogs</strong> (like Beagles): Every 4-6 weeks</li>
          <li><strong>Dogs with hair instead of fur</strong> (like Poodles): Every 4-6 weeks</li>
        </ul>
        <p>Bathing too frequently can strip natural oils and cause dry skin, while infrequent bathing can lead to odor and skin issues.</p>
        
        <h2>Preparing for Bath Time</h2>
        <p>Proper preparation makes bath time easier for both you and your dog:</p>
        <ol>
          <li><strong>Brush thoroughly</strong> to remove loose fur and tangles. This is especially important for long-haired breeds.</li>
          <li><strong>Gather all supplies</strong> before bringing your dog to the bathing area:
            <ul>
              <li>Dog-specific shampoo (never use human products)</li>
              <li>Conditioner (optional, but recommended for long-haired dogs)</li>
              <li>Non-slip mat for the tub or shower</li>
              <li>Several towels</li>
              <li>Washcloth for the face</li>
              <li>Treats for positive reinforcement</li>
              <li>Cotton balls for ear protection</li>
              <li>Cup or handheld sprayer for rinsing</li>
            </ul>
          </li>
          <li><strong>Protect the ears</strong> by placing cotton balls just inside the ear openings to prevent water entry.</li>
          <li><strong>Choose the right location</strong> - bathtub, shower, sink for small dogs, or outdoor area in warm weather.</li>
        </ol>
        
        <h2>The Bathing Process</h2>
        <p>Follow these steps for a successful bath:</p>
        <ol>
          <li><strong>Use lukewarm water</strong> - not too hot or cold.</li>
          <li><strong>Wet your dog thoroughly</strong> from neck to tail, avoiding the head initially.</li>
          <li><strong>Apply shampoo</strong> and work into a lather. Start at the neck and work backward.</li>
          <li><strong>Massage gently</strong> to clean the coat and stimulate the skin.</li>
          <li><strong>Pay special attention</strong> to often-dirty areas like paws, belly, and rear end.</li>
          <li><strong>Rinse completely</strong> until water runs clear. Any residual shampoo can cause irritation.</li>
          <li><strong>Apply conditioner</strong> if using, following product instructions.</li>
          <li><strong>Wash the face</strong> using a damp washcloth with minimal or no shampoo. Be careful around eyes and ears.</li>
          <li><strong>Final rinse</strong> to ensure all products are removed.</li>
        </ol>
        
        <h2>Drying Your Dog</h2>
        <p>Proper drying is crucial, especially for thick-coated breeds:</p>
        <ul>
          <li>Allow your dog to shake off excess water (preferably while still in the tub)</li>
          <li>Towel dry thoroughly, using pressing motions rather than rubbing</li>
          <li>For dogs that tolerate it, use a blow dryer on low heat setting, keeping it moving and at a safe distance</li>
          <li>Brush while drying to prevent tangles in longer coats</li>
          <li>Keep your dog in a warm area until completely dry</li>
        </ul>
        
        <h2>Making Bath Time Positive</h2>
        <p>Create a positive association with bathing:</p>
        <ul>
          <li>Use treats and praise throughout the process</li>
          <li>Speak in a calm, reassuring voice</li>
          <li>Start bathing experiences early in a dog's life</li>
          <li>Be patient and keep sessions short for nervous dogs</li>
          <li>End with a favorite activity or play session</li>
        </ul>
        
        <h2>Special Considerations</h2>
        <p>Adjust your approach for special situations:</p>
        <ul>
          <li><strong>Puppies:</strong> Use puppy-specific shampoo and keep sessions brief and positive</li>
          <li><strong>Senior dogs:</strong> Provide non-slip surfaces and support for arthritic pets</li>
          <li><strong>Dogs with skin conditions:</strong> Use medicated shampoos as prescribed by your veterinarian</li>
          <li><strong>Anxious dogs:</strong> Try calming products or consider professional grooming</li>
        </ul>
        
        <h2>Product Recommendations</h2>
        <p>Choose products based on your dog's specific needs:</p>
        <ul>
          <li><strong>For sensitive skin:</strong> Hypoallergenic, oatmeal-based shampoos</li>
          <li><strong>For dogs with allergies:</strong> Fragrance-free, dye-free formulas</li>
          <li><strong>For white/light coats:</strong> Brightening shampoos (used occasionally)</li>
          <li><strong>For water-repellent coats:</strong> Shampoos that preserve natural oils</li>
          <li><strong>For odor control:</strong> Deodorizing formulas with natural ingredients</li>
        </ul>
      `,
    },
    {
      id: 4,
      title: "Beauty Treatments for Your Cat",
      excerpt: "Safe and fun beauty treatments to keep your cat looking and feeling their best.",
      category: "Cats",
      image: "/images/cat-beauty.jpeg",
      author: "Cat Expert Lisa",
      date: "May 10, 2023",
      readTime: "8 min read",
      content: `
        <h2>Beauty Treatments Your Cat Will Actually Enjoy</h2>
        <p>While cats are naturally fastidious groomers, they can benefit from some extra beauty care. The key is to make these treatments enjoyable and stress-free. Here are some cat-friendly beauty treatments that focus on health as well as appearance.</p>
        
        <h2>Luxurious Brushing Techniques</h2>
        <p>Elevate your regular brushing routine into a spa-like experience:</p>
        <ul>
          <li><strong>Choose the right tools:</strong> Invest in high-quality brushes specific to your cat's coat type</li>
          <li><strong>Warm the brush:</strong> Briefly warm metal combs or brushes with a hairdryer on low setting (test first)</li>
          <li><strong>Use aromatherapy:</strong> Lightly mist the room (not your cat) with cat-safe calming scents like lavender</li>
          <li><strong>Incorporate massage:</strong> Alternate between brushing and gentle massage strokes</li>
          <li><strong>Focus on pleasure points:</strong> Many cats enjoy extra attention around the cheeks, chin, and base of tail</li>
        </ul>
        
        <h2>Gentle Facial Cleansing</h2>
        <p>Keep your cat's face fresh and clean:</p>
        <ol>
          <li>Use specialized pet facial wipes or a soft cloth dampened with warm water</li>
          <li>Gently wipe around the eyes to remove any discharge (using a separate area of the cloth for each eye)</li>
          <li>Clean facial folds if your cat has a flat face (like Persians)</li>
          <li>Wipe the chin area, which can develop acne in some cats</li>
          <li>Follow with a soft brush to smooth facial fur</li>
        </ol>
        
        <h2>Paw Treatments</h2>
        <p>Pamper your cat's paws with these spa-inspired treatments:</p>
        <ul>
          <li><strong>Gentle inspection:</strong> Check between toes for debris or matted fur</li>
          <li><strong>Trim fur:</strong> Carefully trim excess fur between paw pads if needed</li>
          <li><strong>Moisturize pads:</strong> Apply a small amount of pet-safe paw balm for dry or cracked pads</li>
          <li><strong>Nail care:</strong> Trim just the tips of the nails, avoiding the quick</li>
          <li><strong>Paw massage:</strong> Gently massage each paw pad for circulation and relaxation</li>
        </ul>
        
        <h2>Coat Conditioning Treatments</h2>
        <p>For especially lustrous fur:</p>
        <ul>
          <li><strong>Omega fatty acid supplements:</strong> Add to food as directed by your veterinarian</li>
          <li><strong>Leave-in conditioners:</strong> Use cat-specific products for long-haired breeds</li>
          <li><strong>Silk scarves or bandanas:</strong> For special occasions (always supervise)</li>
          <li><strong>Anti-static sprays:</strong> Especially helpful in dry winter months</li>
          <li><strong>Specialized wipes:</strong> To add shine between grooming sessions</li>
        </ul>
        
        <h2>Dental Beauty</h2>
        <p>A beautiful smile is important for cats too:</p>
        <ul>
          <li>Use cat-specific toothpaste and a soft finger brush</li>
          <li>Start with just allowing your cat to taste the toothpaste</li>
          <li>Progress to gentle brushing of front teeth, then gradually include more teeth</li>
          <li>Consider dental treats or toys designed to reduce plaque</li>
          <li>Schedule professional dental cleanings as recommended by your vet</li>
        </ul>
        
        <h2>Ear Care</h2>
        <p>Clean, healthy ears complete the well-groomed look:</p>
        <ul>
          <li>Inspect ears weekly for wax, debris, or signs of infection</li>
          <li>Clean only the visible part of the ear with a cat-specific ear cleaner on a cotton ball</li>
          <li>Never insert anything into the ear canal</li>
          <li>Gently massage the base of the ears for relaxation</li>
        </ul>
        
        <h2>Creating a Spa Atmosphere</h2>
        <p>Set the mood for beauty treatments:</p>
        <ul>
          <li>Choose a quiet time when your cat is naturally relaxed</li>
          <li>Create a comfortable space with your cat's favorite blanket</li>
          <li>Play soft, calming music</li>
          <li>Use feline pheromone products to reduce stress</li>
          <li>Keep sessions short and positive</li>
        </ul>
        
        <h2>Beauty Don'ts</h2>
        <p>Avoid these unsafe practices:</p>
        <ul>
          <li>Never use human beauty products on cats</li>
          <li>Avoid dyeing fur or applying nail polish</li>
          <li>Don't force treatments if your cat shows signs of stress</li>
          <li>Skip perfumes or heavily scented products</li>
          <li>Don't attempt to style fur with heating tools</li>
        </ul>
        
        <h2>When to Seek Professional Help</h2>
        <p>Consider professional grooming for:</p>
        <ul>
          <li>Severe matting that can't be safely addressed at home</li>
          <li>Lion cuts or other specialized styles</li>
          <li>Cats who become extremely stressed during home grooming</li>
          <li>Elderly or mobility-impaired cats who need extra care</li>
        </ul>
      `,
    },
    {
      id: 5,
      title: "Luxury Spa Treatments for Small Dogs",
      excerpt: "Pamper your small dog with these luxurious and relaxing spa treatments you can do at home.",
      category: "Dogs",
      image: "/images/dog-spa.jpeg",
      author: "Pet Stylist John",
      date: "January 5, 2023",
      readTime: "10 min read",
      content: `
        <h2>Creating a Luxury Spa Experience for Your Small Dog</h2>
        <p>Small dogs often enjoy being pampered, and creating a home spa experience can be a wonderful way to bond while keeping your pet looking and feeling their best. These luxury treatments are specially designed for small breeds like Shih Tzus, Yorkies, Maltese, and Bichons.</p>
        
        <h2>Setting Up Your Home Dog Spa</h2>
        <p>Create the perfect environment for your dog's spa day:</p>
        <ul>
          <li><strong>Dedicated space:</strong> Choose a warm, draft-free area with good lighting</li>
          <li><strong>Comfortable surface:</strong> Use a non-slip mat on a table or counter at a comfortable height for you</li>
          <li><strong>Calming atmosphere:</strong> Play soft music and use pet-safe essential oil diffusers (lavender is calming)</li>
          <li><strong>Premium supplies:</strong> Invest in high-quality products specifically formulated for dogs</li>
          <li><strong>Proper lighting:</strong> Ensure you can see clearly for detailed grooming</li>
        </ul>
        
        <h2>Luxury Bath Experience</h2>
        <p>Elevate bath time from routine to luxurious:</p>
        <ol>
          <li><strong>Pre-bath massage:</strong> Begin with a gentle 5-minute massage to relax your dog</li>
          <li><strong>Temperature control:</strong> Use lukewarm water (101-102°F) for comfort</li>
          <li><strong>Premium shampoo:</strong> Choose sulfate-free, natural ingredient formulas</li>
          <li><strong>Dilution technique:</strong> Pre-dilute shampoo for better distribution and easier rinsing</li>
          <li><strong>Massage application:</strong> Use circular motions to stimulate circulation</li>
          <li><strong>Facial cleansing:</strong> Use a tearless formula or damp cloth for the face</li>
          <li><strong>Deep conditioning:</strong> Apply a dog-specific conditioner and allow to sit for 2-3 minutes</li>
          <li><strong>Thorough rinsing:</strong> Ensure all product is removed to prevent skin irritation</li>
          <li><strong>Warm towel wrap:</strong> Pre-warm towels in the dryer for a cozy finish</li>
        </ol>
        
        <h2>Aromatherapy Treatments</h2>
        <p>Incorporate dog-safe aromatherapy for additional benefits:</p>
        <ul>
          <li><strong>Lavender:</strong> Calming properties, good for anxious dogs</li>
          <li><strong>Chamomile:</strong> Soothing for skin irritations</li>
          <li><strong>Cedarwood:</strong> Natural insect repellent properties</li>
          <li><strong>Application methods:</strong>
            <ul>
              <li>Diluted sprays (never spray directly on face)</li>
              <li>Infused towels</li>
              <li>Diffusers in the room (not directly near your dog)</li>
            </ul>
          </li>
        </ul>
        <p>Always use pet-specific products or consult with a veterinarian about safe dilution ratios.</p>
        
        <h2>Paw Treatments</h2>
        <p>Small dogs often need special attention for their delicate paws:</p>
        <ol>
          <li><strong>Warm soak:</strong> Place paws in warm water with a drop of dog-safe soap</li>
          <li><strong>Gentle cleaning:</strong> Clean between pads with a soft cloth</li>
          <li><strong>Trim fur:</strong> Carefully trim excess fur between pads</li>
          <li><strong>Nail care:</strong> Trim nails and file smooth edges</li>
          <li><strong>Pad moisturizing:</strong> Apply dog-specific paw balm or coconut oil</li>
          <li><strong>Paw massage:</strong> Gently massage each paw for 30 seconds</li>
        </ol>
        
        <h2>Facial Treatments</h2>
        <p>Small dogs with facial folds need special care:</p>
        <ul>
          <li><strong>Gentle cleansing:</strong> Use unscented baby wipes or warm damp cloth</li>
          <li><strong>Tear stain treatment:</strong> Apply specialized tear stain remover for breeds prone to staining</li>
          <li><strong>Fold cleaning:</strong> Carefully clean and dry facial folds</li>
          <li><strong>Beard conditioning:</strong> For breeds with facial hair, apply a small amount of leave-in conditioner</li>
          <li><strong>Ear cleaning:</strong> Gently clean visible parts of ears with dog ear cleaner</li>
        </ul>
        
        <h2>Coat Styling</h2>
        <p>Complete the spa experience with professional-quality styling:</p>
        <ul>
          <li><strong>Blow-drying techniques:</strong>
            <ul>
              <li>Use low heat and speed settings</li>
              <li>Hold dryer at a safe distance</li>
              <li>Dry in the direction of hair growth</li>
              <li>Use a slicker brush while drying for straight coats</li>
            </ul>
          </li>
          <li><strong>Finishing sprays:</strong> Use detangling or conditioning sprays</li>
          <li><strong>Gentle styling:</strong> Use rounded-tip scissors for touch-ups</li>
          <li><strong>Accessorizing:</strong> Add a bandana, bow, or pet-safe hair clip</li>
        </ul>
        
        <h2>Massage Techniques</h2>
        <p>Small dogs particularly enjoy massage therapy:</p>
        <ul>
          <li><strong>Effleurage:</strong> Long, gentle strokes along the back and sides</li>
          <li><strong>Circular technique:</strong> Small circular motions around joints and muscles</li>
          <li><strong>Ear massage:</strong> Gentle rubbing of ear bases to promote relaxation</li>
          <li><strong>Facial massage:</strong> Light circular motions on cheeks and forehead</li>
          <li><strong>Pressure points:</strong> Gentle pressure on specific relaxation points (consult a pet massage guide)</li>
        </ul>
        
        <h2>Hydration and Treats</h2>
        <p>Complete the spa experience with refreshments:</p>
        <ul>
          <li>Offer fresh water in a special "spa day" bowl</li>
          <li>Provide a small, healthy treat after each treatment</li>
          <li>Consider frozen treats in warm weather</li>
        </ul>
        
        <h2>Making It a Regular Routine</h2>
        <p>For maximum benefit, establish a regular spa schedule:</p>
        <ul>
          <li>Full spa treatment every 4-6 weeks</li>
          <li>Brief maintenance sessions weekly</li>
          <li>Take photos to document your dog's "before and after" transformation</li>
          <li>Adjust treatments based on your dog's preferences and needs</li>
        </ul>
      `,
    },
    {
      id: 6,
      title: "Hair Care Routine for Cats",
      excerpt: "Establish a proper hair care routine for your cat to prevent matting and reduce shedding.",
      category: "Cats",
      image: "/images/cat-rollers.jpeg",
      author: "Dr. Michael Chen",
      date: "June 12, 2023",
      readTime: "9 min read",
      content: `
        <h2>Understanding Your Cat's Coat</h2>
        <p>Cats have different coat types that require specific care approaches:</p>
        <ul>
          <li><strong>Short-haired cats:</strong> Dense, close-lying coat with minimal undercoat</li>
          <li><strong>Medium-haired cats:</strong> Slightly longer coat with moderate undercoat</li>
          <li><strong>Long-haired cats:</strong> Flowing coat with significant undercoat</li>
          <li><strong>Curly-coated cats:</strong> Rex breeds with wavy or curly hair</li>
          <li><strong>Hairless cats:</strong> Minimal to no coat, requiring skin care</li>
        </ul>
        
        <h2>The Importance of Regular Grooming</h2>
        <p>Even though cats groom themselves, they benefit from human assistance for several reasons:</p>
        <ul>
          <li>Reduces hairballs and associated digestive issues</li>
          <li>Decreases shedding around your home</li>
          <li>Prevents painful matting, especially in long-haired breeds</li>
          <li>Distributes natural oils for a healthier coat</li>
          <li>Allows early detection of skin issues, lumps, or parasites</li>
          <li>Strengthens the bond between you and your cat</li>
        </ul>
        
        <h2>Essential Grooming Tools</h2>
        <p>Invest in quality tools appropriate for your cat's coat type:</p>
        <ul>
          <li><strong>For short-haired cats:</strong>
            <ul>
              <li>Soft bristle brush</li>
              <li>Rubber grooming mitt</li>
              <li>Fine-toothed metal comb</li>
            </ul>
          </li>
          <li><strong>For medium-haired cats:</strong>
            <ul>
              <li>Slicker brush</li>
              <li>Medium-toothed comb</li>
              <li>Deshedding tool (during shedding seasons)</li>
            </ul>
          </li>
          <li><strong>For long-haired cats:</strong>
            <ul>
              <li>Wide-toothed comb</li>
              <li>Slicker brush</li>
              <li>Dematting tool</li>
              <li>Pin brush</li>
            </ul>
          </li>
          <li><strong>For all cats:</strong>
            <ul>
              <li>Grooming wipes</li>
              <li>Nail clippers</li>
              <li>Soft towel</li>
            </ul>
          </li>
        </ul>
        
        <h2>Establishing a Grooming Schedule</h2>
        <p>Consistency is key to successful cat grooming:</p>
        <ul>
          <li><strong>Short-haired cats:</strong> Brush 1-2 times per week</li>
          <li><strong>Medium-haired cats:</strong> Brush 2-3 times per week</li>
          <li><strong>Long-haired cats:</strong> Brush daily or at minimum 3-4 times per week</li>
          <li><strong>Shedding seasons:</strong> Increase frequency during spring and fall</li>
          <li><strong>Senior cats:</strong> May need more frequent grooming as self-grooming decreases</li>
        </ul>
        
        <h2>Step-by-Step Grooming Routine</h2>
        <ol>
          <li><strong>Preparation:</strong>
            <ul>
              <li>Choose a quiet time when your cat is relaxed</li>
              <li>Place a non-slip mat on a stable surface</li>
              <li>Have all tools within reach</li>
              <li>Consider using treats or catnip to create positive associations</li>
            </ul>
          </li>
          <li><strong>Initial pat-down:</strong>
            <ul>
              <li>Gently run your hands over your cat's entire body</li>
              <li>Note any sensitive areas, mats, or abnormalities</li>
              <li>Check for any skin issues or parasites</li>
            </ul>
          </li>
          <li><strong>Brushing technique:</strong>
            <ul>
              <li>Start with the least sensitive areas (back, sides)</li>
              <li>Use gentle, short strokes in the direction of hair growth</li>
              <li>Progress to more sensitive areas (belly, chest)</li>
              <li>Pay special attention to areas prone to matting (behind ears, armpits, groin)</li>
            </ul>
          </li>
          <li><strong>Dealing with mats:</strong>
            <ul>
              <li>Hold the fur at the base of the mat to prevent pulling the skin</li>
              <li>Use a dematting tool or comb to gently work through the mat</li>
              <li>For severe mats, consider professional help rather than cutting</li>
            </ul>
          </li>
          <li><strong>Finishing touches:</strong>
            <ul>
              <li>Wipe coat with a slightly damp microfiber cloth to collect loose hair</li>
              <li>Apply a cat-safe coat conditioner spray if desired</li>
              <li>Reward with treats and praise</li>
            </ul>
          </li>
        </ol>
        
        <h2>Special Considerations for Different Coat Types</h2>
        <p><strong>For long-haired cats:</strong></p>
        <ul>
          <li>Focus on preventing mats rather than removing them</li>
          <li>Pay special attention to the "pants" area (rear legs and hindquarters)</li>
          <li>Consider a sanitary trim around the rear end</li>
          <li>Use a wide-toothed comb first, followed by a slicker brush</li>
        </ul>
        
        <p><strong>For short-haired cats:</strong></p>
        <ul>
          <li>Use a rubber grooming mitt to remove loose hair</li>
          <li>Finish with a soft bristle brush for shine</li>
          <li>Focus on removing loose hair during shedding seasons</li>
        </ul>
        
        <p><strong>For hairless cats:</strong></p>
        <ul>
          <li>Wipe skin weekly with a damp, warm cloth</li>
          <li>Apply cat-safe moisturizer as recommended by your veterinarian</li>
          <li>Bathe more frequently than furred cats (usually weekly)</li>
        </ul>
        
        <h2>Nutrition for Coat Health</h2>
        <p>Support your grooming routine with proper nutrition:</p>
        <ul>
          <li>Ensure diet contains adequate protein and essential fatty acids</li>
          <li>Consider omega-3 supplements (fish oil) with veterinary approval</li>
          <li>Provide plenty of fresh water to maintain skin hydration</li>
          <li>Ask your veterinarian about specialized foods for coat health</li>
        </ul>
        
        <h2>When to Seek Professional Help</h2>
        <p>Consider professional grooming services when:</p>
        <ul>
          <li>Your cat has severe matting</li>
          <li>Your cat becomes extremely stressed during home grooming</li>
          <li>You notice skin issues, excessive hair loss, or parasites</li>
          <li>Your cat needs specialized grooming like lion cuts</li>
          <li>Your cat is elderly or has mobility issues that make self-grooming difficult</li>
        </ul>
        
        <h2>Making Grooming a Positive Experience</h2>
        <p>Build positive associations with grooming:</p>
        <ul>
          <li>Start with short sessions and gradually increase duration</li>
          <li>Use treats, praise, and petting as rewards</li>
          <li>Stop before your cat becomes irritated</li>
          <li>Associate grooming tools with positive experiences</li>
          <li>Remain calm and patient throughout the process</li>
        </ul>
      `,
    },
  ]

  return articles.find((article) => article.id.toString() === id) || articles[0]
}

export default function CareTipDetailPage({ params }: { params: { id: string } }) {
  const article = getArticle(params.id)

  return (
    <div className="container py-12">
      <Link href="/care-tips" className="flex items-center text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all care tips
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
            {article.category === "Dogs" ? (
              <span className="flex items-center">
                <Dog className="h-3 w-3 mr-1" /> {article.category}
              </span>
            ) : (
              <span className="flex items-center">
                <Cat className="h-3 w-3 mr-1" /> {article.category}
              </span>
            )}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{article.title}</h1>
          <div className="flex items-center text-muted-foreground mb-6">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">{article.author}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Share this article</h2>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
              Share on Facebook
            </Button>
            <Button variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary/10">
              Share on Twitter
            </Button>
            <Button variant="outline" className="border-accent/20 text-accent hover:bg-accent/10">
              Copy Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
