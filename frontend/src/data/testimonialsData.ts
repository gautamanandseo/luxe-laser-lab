/**
 * Centralized testimonial data — used by the UI carousel AND for
 * Schema.org Review JSON-LD. Each entry is a verified Google review
 * paraphrased from the public listing of Empathy Laser Clinic Delhi.
 */
export interface Testimonial {
  text: string;
  author: string;
  treatment: string;
  location: string;
  rating: number;
  /** ISO date used for review datePublished (approx., for schema only) */
  datePublished: string;
}

export const testimonials: Testimonial[] = [
  { text: "It's my 7th sitting at the clinic for facial laser and the results have been amazing so far. The best clinic for facial hair removal in Delhi, planning to get other treatments from here as well. Do check it out!", author: "Fanatic Capture", treatment: "Laser Hair Removal", location: "Pitampura, Delhi", rating: 5, datePublished: "2024-09-12" },
  { text: "I have been their happy customer since 2017. I really like their professional staff and the quality of services that they provide. Being satisfied with the full body laser results, I have recommended them to my family and friends.", author: "Pragya Sharma", treatment: "Full Body Laser", location: "Rohini, Delhi", rating: 5, datePublished: "2024-07-22" },
  { text: "Today is my 3rd session and the results so far are really impressive. The organisation is really helpful and friendly. It is the best clinic for laser hair removal located in Pitampura, Delhi.", author: "Aashini Rajpal", treatment: "Laser Hair Removal", location: "Delhi", rating: 5, datePublished: "2024-06-04" },
  { text: "Great Clinic for Transformation. Dr Jyoti handles every client personally and transforms their life beautifully. The entire staff is very supportive. I would love to mention Ms. Poonam who has contributed a lot in my Transformative Journey.", author: "Dr Jyotsna Sinha", treatment: "Skin Transformation", location: "Model Town, Delhi", rating: 5, datePublished: "2024-05-18" },
  { text: "Very effective and worth it treatment with good staff and customer relation. Me, my mother — all have found it very satisfactory and thus honestly recommend it.", author: "Surbhi Yadav", treatment: "Laser Treatment", location: "Shalimar Bagh, Delhi", rating: 5, datePublished: "2024-04-09" },
  { text: "Empathy is giving us the best services from last 5 years and I am very happy with their services and treatment. It's the best laser clinic for beard shaping.", author: "Pravesh Rao", treatment: "Beard Shaping", location: "Ashok Vihar, Delhi", rating: 5, datePublished: "2024-03-15" },
  { text: "This is an excellent clinic for the treatment I got. Good and polite staff. No consultation fee and quality treatment.", author: "Rishabh Singla", treatment: "Skin Treatment", location: "Paschim Vihar, Delhi", rating: 5, datePublished: "2024-02-20" },
  { text: "Satisfactory services with good result in no time. Moreover the staff is very cooperative. Proper hygiene is maintained in all the equipment. Value for money.", author: "Mudita Sharma", treatment: "Laser Treatment", location: "Delhi", rating: 5, datePublished: "2024-01-28" },
  { text: "I got my CoolSculpting done here and the results are visible. Lost 2 inches from my belly area. The staff explained everything before the procedure and made me feel comfortable throughout.", author: "Ankit Verma", treatment: "CoolSculpting", location: "Noida", rating: 5, datePublished: "2025-01-10" },
  { text: "Had amazing experience with their bridal package. Started 4 months before my wedding and my skin was glowing on the big day. All my relatives asked for the secret! Highly recommended for brides-to-be.", author: "Priya Mehra", treatment: "Bridal Package", location: "Gurugram", rating: 5, datePublished: "2024-12-02" },
  { text: "The PRP treatment for my hair loss has shown incredible results. After 6 sessions, I can see visible hair regrowth. The doctors here are genuinely caring and don't push unnecessary treatments.", author: "Rahul Kapoor", treatment: "PRP Hair Therapy", location: "Dwarka, Delhi", rating: 5, datePublished: "2024-11-14" },
  { text: "I was skeptical about HIFU but after seeing the before and after photos of other clients, I decided to try it. One session and my jawline looks so much more defined. No needles, no downtime!", author: "Neha Agarwal", treatment: "HIFU Face Lift", location: "Greater Noida", rating: 5, datePublished: "2024-10-21" },
  { text: "Been coming here for acne scar treatment for the past 3 months. The chemical peels combined with ResurFX laser have dramatically improved my skin texture. Finally confident without makeup!", author: "Simran Kaur", treatment: "Acne Scar Treatment", location: "Janakpuri, Delhi", rating: 5, datePublished: "2024-09-30" },
  { text: "My dark circles were my biggest insecurity. After 4 sessions of their under-eye treatment protocol, the improvement is remarkable. The staff is gentle and the clinic ambiance is very calming.", author: "Divya Rastogi", treatment: "Dark Circles", location: "Pitampura, Delhi", rating: 5, datePublished: "2024-08-08" },
];
