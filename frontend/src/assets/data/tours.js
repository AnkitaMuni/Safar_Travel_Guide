import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.jpg";
import tourImg10 from "../images/tour-img10.jpg";
import tourImg11 from "../images/tour-img11.jpg";
import tourImg12 from "../images/tour-img12.jpg";
import tourImg13 from "../images/tour-img13.jpg";
import tourImg14 from "../images/tour-img14.jpg";
import tourImg15 from "../images/tour-img15.jpg";
import tourImg16 from "../images/tour-img16.jpg";
import tourImg17 from "../images/tour-img17.jpg";
import tourImg18 from "../images/tour-img18.jpg";
import tourImg19 from "../images/tour-img19.jpg";
import tourImg20 from "../images/tour-img20.jpg";
import tourImg21 from "../images/tour-img21.jpg";
import tourImg22 from "../images/tour-img22.jpg";
import tourImg23 from "../images/tour-img23.jpg";
import tourImg24 from "../images/tour-img24.jpg";
import tourImg25 from "../images/tour-img25.jpg";


const tours = [
  {
    id: "01",
    title: "Ziro",
    city: "Arunachal Pradesh",
    distance: 300,
    address: "Ziro Valley, Arunachal Pradesh, India",
    price: 99,
    maxGroupSize: 10,
    desc: "If you're in Arunachal or even the North East, Ziro is something you just cannot miss. The ultimate cultural retreat among the very friendly tribes and the awesome locales will stick with you for a very very long time. And they have a number of festivals throughout the year, from music to cultural fiestas, which are a glorious treat for travellers.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.5,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Little Lhasa",
    city: "Himachal Pradesh",
    distance: 400,
    address:'Little Lhasa,Himachal Pradesh ,India',
    price: 99,
    maxGroupSize: 8,
    desc: "The hilly beauty of Himachal is best enjoyed at this hamlet called Mcleodganj, and the beauty and wilderness around it, just adds to the marvel that the place is. If you want to soak in Himachal in its pristine beauty, head over for a short trek to Triund, which sets off from Mcleodganj, and is the most amazing way to go cloud-gazing!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Majuli",
    city: "Assam",
    distance: 500,
    address: "Majuli River Island, Brahmaputra River, Assam, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Think of water so blue that you lose all inhibitions and lose yourself in the calmness of the placid waters. That's the feel of Majuli for you. If you're travelling to Assam, do not miss this river island of the mighty Brahmaputra, and do not miss their fresh fish!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Bodh Gaya",
    city: "Bihar",
    distance: 500,
    address: "Bodh Gaya, Gaya District, Bihar, India",
    price: 99,
    maxGroupSize: 8,
    desc: "The peace of the Buddhist-dominated town, along with the silence and serenity, make Bodh Gaya our top pick for Bihar! If you ever find yourself in Bihar, do not give Bodh Gaya a miss.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Danteshwari Temple",
    city: "Chattisgargh",
    distance: 500,
    address: "Danteshwari Temple, Dantewada, Chattisgarh, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Chattisgarh, the Mecca of Offbeat tourism, is great when it comes to quiet temples hidden away in deep forests, a population of diverse cultures and tribes and some very offbeat tourist places.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Rann of Kutch",
    city: "Gujarat",
    distance: 500,
    address: "Rann of Kutch, Kutch District, Gujarat, India",
    price: 99,
    maxGroupSize: 8,
    desc: "There are few things you'll ever see that match up to the beauty of the white Rann paired with the setting sun and the wild, colourful beauty of its amazing locals. Not to mention that if you're on a road trip, you might want not to come back at all! That makes the White Rann of Kutch; our bucket list pick for Gujarat!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Alleppy",
    city: "Kerala",
    distance: 500,
    address: "Alleppey (Alappuzha), Kerala, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Unless you're there, it's highly improbable that you'll fall in love with Kerala the way you fall asleep - slowly, and then all at once! Although, this is more of the latter. Kerala is called “God's own country” for a reason, and to find out the reason; you should probably go visit Alleppey.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Damdada Lake",
    city: "Gurgaon",
    distance: 500,
    address: "Damdama Lake, Sohna, Gurgaon, Haryana, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Damdama Lake, a quiet retreat away from the hustle and bustle of the capital, is a must-do from Haryana. Quietly set away in Sohna, this is a great place to run away to if you're around.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Pangong Lake",
    city: "Jammu and Kashmir",
    distance: 500,
    address: "Pangong Lake, Ladakh, Jammu and Kashmir, India",
    price: 99,
    maxGroupSize: 8,
    desc: "The crown on India's head, Kashmir, is a delight for anybody who visits. However, Ladakh is in a class of its own. The beautiful lakes, Pangong Tso, Tso Moriri, are a reason to visit! Moreover, oh, if you have the enthusiasm that goes with it, ride to Ladakh! Nothing beats that experience.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "10",
    title: "Betla National Park",
    city: "Jharkhand",
    distance: 500,
    address: "Betla National Park, Latehar, Jharkhand, India",
    price: 99,
    maxGroupSize: 8,
    desc: "The only way to enjoy Jharkhand in its entirety is to soak in the nature that still runs thick in its blood. Head over to Betla Forest and say hello to a bunch of adventures and much wilderness - both flora and fauna!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "11",
    title: "Hampi",
    city: "Karnataka",
    distance: 500,
    address: "Hampi, Vijayanagara District, Karnataka, India",
    price: 99,
    maxGroupSize: 8,
    desc: "The historical ruins of Hampi are the best experience that you'll probably have in Karnataka. Apart from being one of those places where you can just put on your hiking shoes and walk around for hours, it also is a great place to chill!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: false,
  },
  {
    id: "12",
    title: "Golden City",
    city: "Rajasthan",
    distance: 500,
    address: "Jaisalmer, Rajasthan, India",
    price: 99,
    maxGroupSize: 8,
    desc: "At the risk of sounding too conformist, a desert camel safari is just too exhilarating an adventure to miss. If you are in Rajasthan, do not risk missing this for the world!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: false,
  },
  {
    id: "13",
    title: "Sun Temple",
    city: "Odisha",
    distance: 500,
    address: "Konark Sun Temple, Konark, Odisha, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Beachside beauty is a lovely architectural marvel in India. Drive away from the Puri beach for a few odd hours and find yourself in the beautifully constructed Sun Temple. Winter days are the best time to visit this haven of quiet!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg13,
    featured: false,
  },
  {
    id: "14",
    title: "Valley of Flowers",
    city: "Uttarakhand",
    distance: 500,
    address: "Valley of Flowers National Park, Chamoli, Uttarakhand, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Think Uttarakhand, think of the pristine beauty that comes with it. What better way to look at that, than visiting the Valley of Flowers! Between June and September, the valley comes to life with wild blooms and the trek is even more mesmerising.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg14,
    featured: false,
  },
  {
    id: "15",
    title: "Charminar",
    city: "Andhra Pradesh",
    distance: 500,
    address: "Charminar, Hyderabad, Telangana, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Some old world charm and biryani make up the newest entrant to the state list, but that is in no way all that Telangana boasts of. Head over to Hyderabad and indulge in history walks, gape at some fantastic architecture and dig into the best food that you might ever eat!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg15,
    featured: false,
  },
  {
    id: "16",
    title: "Bandhavgarh National Park",
    city: "Madhya Pradesh",
    distance: 500,
    address: "Bandhavgarh National Park, Umaria District, Madhya Pradesh, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Wildlife is the most awesome wealth of central India, and Bandhavgarh is a fantastic place to see it and enjoy it. The big cats make it all the more enticing, right?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg16,
    featured: false,
  },
  {
    id: "17",
    title: "Beaches",
    city: "Goa",
    distance: 500,
    address: "Various beaches in Goa, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Nothing beats the fun of an all-night party in Goa, and waking up to the roar of the sea and your thoughts to keep you company, right?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg17,
    featured: false,
  },
  {
    id: "18",
    title: "Tiger Hill",
    city: "West Bengal",
    distance: 500,
    address: "Tiger Hill, Darjeeling, West Bengal, India",
    price: 99,
    maxGroupSize: 8,
    desc: "And then there's Darjeeling, the beauty that is cradled in the northern reaches of West Bengal. To know Darjeeling is to love Darjeeling, and this is the perfect place to visit if you find yourself in Bengal!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg18,
    featured: false,
  },
  {
    id: "19",
    title: "Gurudongmar Lake",
    city: "Sikkim",
    distance: 500,
    address: "Gurudongmar Lake, North Sikkim, India",
    price: 99,
    maxGroupSize: 8,
    desc: "While Sikkim has remained on travellers’ fantasies for generations, North Sikkim is just too beautiful to be missed. The Tsomgo Lake, the Gurudongmar lake, the high passes, the snow-capped peaks and all the lovely sunrises, are great additions to add to your “Been there done that” list.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg19,
    featured: false,
  },
  {
    id: "20",
    title: "Barak Waterfall",
    city: "Manipur",
    distance: 500,
    address: "Barak Waterfalls, Tamenglong, Manipur, India",
    price: 99,
    maxGroupSize: 8,
    desc: "The wild beauty of Manipur isn't something you'd want to give up the chance to experience! Plus, for non-veggies, there is some GREAT food as well, that is just fire to gunpowder. Virgin, untouched lands, sure are the calling from God!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg20,
    featured: false,
  },
  {
    id: "21",
    title: "Varanasi",
    city: "Uttar Pradesh",
    distance: 500,
    address: "Varanasi, Uttar Pradesh, India",
    price: 99,
    maxGroupSize: 8,
    desc: "On Banaras, Mark Twain has written, “Benaras is older than history, older than tradition, older even than legend and looks twice as old as all of them put together”. To understand the essence of Uttar Pradesh in its entirety, you need to set foot in the holy city at least once and seep in the beauty of Kashi. Like its been said, “Kadam rakho Kashi mein, tar jaoge Kashi mein.”",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg21,
    featured: false,
  },
  {
    id: "22",
    title: "Borra Caves",
    city: "Vishakapatnam",
    distance: 500,
    address: "Borra Caves, Ananthagiri Hills, Visakhapatnam, Andhra Pradesh, India",
    price: 99,
    maxGroupSize: 8,
    desc: "While the circuit of Visakhapatnam and Araku is a great road trip journey as well, Borra caves simply cannot be missed. The stalagmite formations in this naturally formed cave are breathtaking, and the wet fragrance that dominates the caves is a beacon from nature itself. Check this off your list to understand the beauty of Andhra!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg22,
    featured: false,
  },
  {
    id: "23",
    title: "Kanyakumari Beach",
    city: "Tamil Nadu",
    distance: 500,
    address: "Kanyakumari Beach, Kanyakumari, Tamil Nadu, India",
    price: 99,
    maxGroupSize: 8,
    desc: "The southernmost tip of India is a delightful odyssey of beautiful beaches, colourful sunrises and sunsets, and a haven for beautiful pictures. At the fear of being roasted, the winters are a better time to visit!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg23,
    featured: false,
  },
  {
    id: "24",
    title: "Golden Temple",
    city: "Amritsar",
    distance: 500,
    address: "Golden Temple, Amritsar, Punjab, India",
    price: 99,
    maxGroupSize: 8,
    desc: "The eternal beauty of India, the abode of sanctity and peace just cannot be missed if you’re ever in Punjab. You can sit at the Sarovar for hours and reflect; you can listen to the Baani at 4 in the morning and feel completely at ease with your being. The Golden Temple is an experience just too amazing to miss.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg24,
    featured: false,
  },
  {
    id: "25",
    title: "Unakoti",
    city: "Tripura",
    distance: 500,
    address: "Unakoti, Kailashahar, Tripura, India",
    price: 99,
    maxGroupSize: 8,
    desc: "Massive rock-cut Shiva and Parvati architecture, cut out of a 30 feet tall rock sculpture, is a marvel you cannot miss. The state is also home to tea estates, which though smaller than those in Darjeeling in size, are still great places to visit.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg25,
    featured: false,
  },
];

export default tours;
