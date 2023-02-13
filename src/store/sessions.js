import { defineStore } from "pinia";
import { cloneDeep } from "lodash/cloneDeep";
export const useSessionsStore = defineStore("sessions", {
  state: () => ({
    filter: {},
    categories: [
      "tech",
      "product",
      "marketing",
      "creative",
      "hobbies",
      "other",
    ],
    levels: ["Beginner", "Intermediate", "Advance"],
    openCourses: [
      {
        description:
          "This course will teach you the basics of the high-level, interpreted programming language Python, including its uses in web development, scientific computing, data analysis, artificial intelligence, and more.",
        id: 1,
        speaker: {
          name: "Daniel Litmanovich",
          pictureUrl: "src/assets/daniel.jpg",
          description: "Automation Engineer",
        },
        date: "01/03/23 8:00",
        name: "Python",
        location: "Gordon",
        details:
          "This course will provide you with a comprehensive introduction to the Python programming language. They will learn the basics of Python syntax and programming concepts, including data types, variables, control structures, functions, and modules. The course will also cover the use of Python in various application domains such as web development, scientific computing, data analysis, artificial intelligence, and more. Students will learn how to work with the standard library and third-party libraries, including NumPy and Pandas. The course will also cover best practices for writing and debugging Python code, as well as how to design and structure larger Python projects. By the end of the course, students will have a solid foundation in Python and be able to apply their knowledge to real-world projects.",
        category: "tech",
        level: "Intermediate",
        attendees: [
          { full_name: "John Doe" },
          { full_name: "Jane Smith" },
          { full_name: "Bob Johnson" },
          { full_name: "Emma Brown" },
          { full_name: "Michael Williams" },
        ],
      },
      {
        id: 2,
        speaker: {
          name: "Narkis Daniel",
          pictureUrl: "src/assets/Narkis.jpg",
        },
        name: "Vue 3",
        date: "02/04/23",
        location: "Apolonoa",
        description:
          "Vue 3 is a popular JavaScript framework for building user interfaces, known for its reactivity, simplicity, and performance.",
        details:
          "Vue 3 is the latest version of the popular JavaScript framework for building user interfaces. It is widely used for creating dynamic, reactive single-page applications and progressive web applications. Vue 3 is known for its simplicity, making it a great choice for developers of all levels, as well as its performance, which is achieved through its reactivity system and efficient updates. In this course, students will learn the basics of Vue 3, including components, templates, reactive data, directives, and more. They will also learn how to use Vue's routing and state management solutions, and how to integrate Vue with other libraries and APIs. By the end of the course, you will have a solid understanding of Vue 3 and be able to build dynamic, reactive user interfaces for web applications.",
        category: "tech",
        level: "Advance",
        attendees: [
          { full_name: "John Doe" },
          { full_name: "Jane Smith" },
          { full_name: "Bob Johnson" },
          { full_name: "Emma Brown" },
          { full_name: "Michael Williams" },
          { full_name: "Emily Davis" },
          { full_name: "William Taylor" },
          { full_name: "Daniel Wilson" },
          { full_name: "Sophia Lee" },
          { full_name: "James Martinez" },
        ],
      },
      {
        id: 3,
        speaker: {
          name: "Jenny Kolmanovitch",
          pictureUrl: "src/assets/jenny.jpg",
        },
        name: "Product Marketing",
        date: "03/04/23",
        location: "Ein Gedi",
        description: "'Product Marketing: From Strategy to Launch'",
        details:
          "'Product Marketing: From Strategy to Launch' In this course, you will learn the ins and outs of product marketing and how to effectively communicate the value of a product to target audiences. They will learn how to create a product marketing strategy, conduct market research, define target personas, and develop messaging and positioning that resonates with the target audience. The course will also cover the basics of product launch, including launch planning, go-to-market strategies, and post-launch analysis. By the end of the course, you will have a solid understanding of product marketing and be equipped to create and execute successful product launches.",
        category: "product",
        level: "Beginner",
        attendees: [
          { full_name: "Emily Davis" },
          { full_name: "William Taylor" },
          { full_name: "Daniel Wilson" },
        ],
      },
      {
        id: 4,
        speaker: {
          name: "Idan Marko",
          pictureUrl: "src/assets/idan.jpg",
        },
        name: "Admin 2.0",
        date: "04/05/23",
        location: "Sidny",
        description:
          "Admin 2.0 is a platform group product that enables payer registration, configuration, and various actions, making it a crucial tool for efficient management of new customers.",
        details:
          "Admin 2.0 is a cutting-edge platform group product designed for efficient management of new customers, called payers. The product allows for seamless payer registration, configuration, and various actions to be performed on them. In this course, you will learn how to effectively use Admin 2.0 to manage payers, including registering new payers, configuring their profiles, and performing various actions. They will also learn how to use the platform's advanced features. By the end of the course, you will have a deep understanding of Admin 2.0 and be equipped to use it to efficiently manage their payers and meet their needs.",
        category: "product",
        level: "Intermediate",
        attendees: [
          { full_name: "Sophia Lee" },
          { full_name: "James Martinez" },
          { full_name: "Olivia Davis" },
        ],
      },
      {
        id: 5,
        speaker: {
          name: "Yoav Ben Azar",
          pictureUrl: "src/assets/yoav.jpg",
        },
        name: "Marketing Basics",
        date: "05/05/23",
        location: "Kalia",
        description:
          "Marketing is the process of creating, communicating, delivering, and exchanging offerings that have value for customers, clients, and society as a whole.",
        details:
          "Marketing is a critical aspect of any business and involves a wide range of activities aimed at creating, communicating, delivering, and exchanging offerings that have value for customers, clients, and society as a whole. In this course, you will learn the core principles of marketing, including market research, target audience identification, segmentation, positioning, and branding. They will also learn about different marketing channels, including digital marketing, advertising, public relations, and sales, and how to effectively use them to reach target audiences. Additionally, students will learn how to measure the success of marketing efforts and how to use data to make informed decisions. By the end of the course, you will have a solid understanding of marketing and be equipped to create effective marketing campaigns for a variety of products and services.",
        category: "Marketing",
        level: "Intermediate",
        attendees: [
          { full_name: "Ava Smith" },
          { full_name: "Ethan Wilson" },
          { full_name: "Isabella Jones" },
        ],
      },
      {
        id: 6,
        speaker: {
          name: "Sveta Osherov Gross",
          pictureUrl: "src/assets/sveta.jpg",
        },
        name: "Digital Marketing Strategy",
        date: "06/06/23",
        location: "Sphera",
        description:
          "'Digital Marketing Strategy' teaches students how to develop a comprehensive and data-driven digital marketing strategy, covering the latest trends and technologies in the industry.",
        details:
          "'Digital Marketing Strategy' In this course, students will dive deeper into the world of digital marketing and learn how to create a comprehensive digital marketing strategy. They will learn about the latest digital marketing trends and technologies, including social media marketing, content marketing, search engine optimization (SEO), email marketing, and more. The course will cover how to conduct market research, identify target audiences, and create buyer personas to guide digital marketing efforts. Additionally, students will learn how to measure the success of their digital marketing campaigns and make data-driven decisions to continuously improve their strategy. By the end of the course, students will have a deep understanding of digital marketing and be equipped to develop and execute a successful digital marketing strategy for their organization or clients.",
        category: "Marketing",
        level: "Beginner",
        attendees: [
          { full_name: "Mia Anderson" },
          { full_name: "Alexander Martinez" },
          { full_name: "Charlotte Harris" },
        ],
      },
      {
        id: 7,
        speaker: {
          name: "Moshe Tikochinski",
          pictureUrl: "src/assets/moshe.jpg",
        },
        name: "Creative Basics",
        date: "07/07/23",
        location: "Castel",
        description:
          "Creative is a broad term that encompasses the use of imagination, original ideas, and artistic skills to produce unique and engaging content, designs, and products.",
        details:
          "'Creative' is a broad term that encompasses the use of imagination, original ideas, and artistic skills to produce unique and engaging content, designs, and products. In this course, students will learn how to tap into their creativity and develop their artistic skills to create compelling and original works. They will explore various creative disciplines, such as graphic design, illustration, photography, copywriting, and more, and learn how to effectively use these skills to communicate and express their ideas. Additionally, students will learn how to critique and analyze their own work, as well as the work of others, and use this knowledge to continuously improve their creative skills. By the end of the course, students will have a solid understanding of the creative process and be equipped to produce unique and engaging works that capture their imagination and ideas.",
        category: "Creative",
        level: "Advance",
        attendees: [
          { full_name: "Abigail Wilson" },
          { full_name: "William Jackson" },
          { full_name: "Evelyn Davis" },
        ],
      },
      {
        id: 8,
        speaker: {
          name: "Niv Guetta",
          pictureUrl: "src/assets/niv.jpg",
        },
        name: "Creative Storytelling",
        date: "01/07/23",
        location: "Dor",
        description:
          "'Creative Storytelling: From Concept to Screen' teaches students the art of storytelling through film, animation, or other visual mediums, covering the basics of pre-production, production, and post-production.",
        details:
          "'Creative Storytelling: From Concept to Screen' In this course, students will learn the art of creative storytelling and how to bring their stories to life through film, animation, or other visual mediums. They will learn how to develop a story concept, create compelling characters, and write a script that captures the essence of their story. Additionally, students will learn about the different elements of visual storytelling, such as shot selection, camera angles, and sound design, and how to effectively use these elements to bring their story to life. The course will cover the basics of pre-production, production, and post-production, and students will have the opportunity to work on their own projects and bring their stories to life through the medium of their choice. By the end of the course, students will have a deep understanding of creative storytelling and be equipped to develop and produce their own original works.",
        category: "Beginner",
        level: "Intermediate",
        attendees: [
          { full_name: "Natalie Lee" },
          { full_name: "Michael Smith" },
          { full_name: "Aria Brown" },
        ],
      },
      {
        id: 9,
        speaker: {
          name: "Sveta Osherov Gross",
          pictureUrl: "src/assets/sveta.jpg",
        },
        name: "Retiring at age 40",
        date: "09/07/23",
        location: "Arbel",
        description:
          "Retiring at age 40 is an ambitious goal that requires careful planning and financial management.",
        details:
          "Retiring at age 40 is an ambitious goal that requires careful planning and financial management. In this course, students will learn how to create a comprehensive retirement plan that will help them achieve their goal of retiring early. They will learn about different investment strategies, such as stocks, bonds, real estate, and more, and how to effectively allocate their assets to maximize returns and minimize risk. Additionally, students will learn about tax-efficient retirement planning, including the use of retirement accounts, such as 401(k)s and IRAs, and how to take advantage of government benefits, such as Social Security. The course will also cover budgeting, debt management, and other important financial topics that are essential for achieving financial independence. By the end of the course, students will have a solid understanding of the steps they need to take to retire at age 40 and be well on their way to achieving this goal.",
        category: "Other",
        level: "Beginner",
        attendees: [
          { full_name: "Hannah Gonzalez" },
          { full_name: "Ethan Perez" },
          { full_name: "Lila Anderson" },
        ],
      },
      {
        id: 10,
        speaker: {
          name: "Daniel Litmanovich",
          pictureUrl: "src/assets/daniel.jpg",
        },
        name: "Parental Guidance",
        date: "03/08/23",
        location: "Carmel",
        description:
          "Parental guidance is an educational course that provides tools and strategies for parents to raise happy, healthy, and well-adjusted children.",
        details:
          "'Parental Guidance' is an educational course that provides tools and strategies for parents to raise happy, healthy, and well-adjusted children. The course covers various stages of a child's development, from infancy to adulthood, and provides guidance on how to navigate the unique challenges that each stage presents. Topics include child behavior and discipline, communication, nutrition and health, and academic and career planning. The course also covers issues such as building strong parent-child relationships, dealing with conflict, and fostering independence and self-esteem in children. Additionally, the course will provide information on resources and support systems available to parents, such as counseling services, community programs, and support groups. By the end of the course, parents will have a better understanding of how to raise confident and successful children and be equipped with the skills and knowledge they need to provide the best possible guidance and support to their children.",
        category: "Other",
        level: "Beginner",
        attendees: [
          { full_name: "Avery Jones" },
          { full_name: "Lucas Martinez" },
          { full_name: "Aurora Lee" },
        ],
      },
      {
        id: 11,
        speaker: {
          name: "Narkis Daniel",
          pictureUrl: "src/assets/Narkis.jpg",
        },
        name: "How to Plan a Trip",
        date: "09/08/23",
        location: "Dov",
        description:
          "'How to Plan a Trip' is a course that teaches students the essential steps and tips for planning a successful and enjoyable trip.",
        details:
          "'How to Plan a Trip' is a course that teaches students the essential steps and tips for planning a successful and enjoyable trip. The course covers various aspects of trip planning, including destination selection, budgeting, itinerary creation, and more. Students will learn about the different types of travel, such as solo travel, group travel, adventure travel, and more, and how to choose the right type of travel for their needs and preferences. They will also learn about the different components of a trip, such as flights, accommodations, transportation, and activities, and how to effectively plan and book these components to ensure a smooth and stress-free trip. Additionally, students will learn about travel safety and security, including travel health insurance, emergency preparedness, and more, and will receive practical tips on how to stay safe and healthy while traveling. By the end of the course, students will have a comprehensive understanding of the trip planning process and be equipped with the knowledge and skills they need to plan and book successful trips.",
        category: "hobbies",
        level: "Intermediate",
        attendees: [
          { full_name: "Sophia Robinson" },
          { full_name: "Liam Anderson" },
          { full_name: "Avery Wilson" },
        ],
      },
      {
        id: 12,
        speaker: {
          name: "Jenny Kolmanovich",
          pictureUrl: "src/assets/jenny.jpg",
        },
        name: "Lattice Theory and Application",
        date: "01/09/23",
        location: "Golan",
        description:
          "'Lattice Theory and Applications' is a course that introduces students to the mathematical concept of lattices and their real-world applications.",
        details:
          "'Lattice Theory and Applications' is a course that introduces students to the mathematical concept of lattices and their real-world applications. Lattice theory is a branch of mathematics that studies partially ordered sets and the relationships between their elements. This course will cover the fundamental concepts and theories of lattice theory, including lattice operations, order properties, and modular lattices. Students will also learn about the applications of lattice theory, such as in computer science, cryptography, and other fields. The course will explore the use of lattice theory in solving practical problems, such as in coding theory, data compression, and information retrieval. Additionally, students will learn about the algorithms and software tools used in lattice theory, and will have the opportunity to work on hands-on projects to apply their knowledge and skills. By the end of the course, students will have a strong understanding of the theories and applications of lattice theory and be equipped with the knowledge and skills they need to further explore this fascinating field.",
        category: "Beginner",
        level: "Intermediate",
        attendees: [
          { full_name: "Isabella Davis" },
          { full_name: "Mason Martinez" },
          { full_name: "Evelyn Jackson" },
        ],
      },
      {
        id: 13,
        speaker: {
          name: "Yoav Ben Azar",
          pictureUrl: "src/assets/yoav.jpg",
        },
        name: "Female Empowerment",
        date: "09/09/23",
        location: "Meron",
        description:
          "'Female Empowerment' is a course that provides education and resources to promote gender equality and empower women.",
        details:
          "'Female Empowerment' is a course that provides education and resources to promote gender equality and empower women. The course covers a range of topics, including gender bias and discrimination, the history of women's rights, and the challenges faced by women in various fields and industries. Students will learn about the social, economic, and political factors that impact women's equality and empowerment and will receive practical strategies for advocating for women's rights and creating change. Additionally, the course will provide an overview of successful female empowerment initiatives and movements, and will explore the role of men in promoting gender equality. The course will also provide information on resources and support systems available to women, such as mentorship programs, community organizations, and advocacy groups. By the end of the course, students will have a deep understanding of the challenges faced by women and the strategies they can use to empower and support women in their communities and beyond.",
        category: "Other",
        level: "Advance",
        attendees: [
          { full_name: "Emma Smith" },
          { full_name: "Oliver Lee" },
          { full_name: "Mila Brown" },
        ],
      },
      {
        id: 14,
        speaker: {
          name: "Nir Kravetzky",
          pictureUrl: "src/assets/nir.jpg",
        },
        name: "Preventing Baby Colic",
        date: "09/07/23",
        location: "Ofir",
        description:
          "'Preventing Baby Colic' is a course that teaches parents and caretakers the causes and prevention strategies for baby colic.",
        details:
          "'Preventing Baby Colic' is a course that teaches parents and caretakers the causes and prevention strategies for baby colic. The course will cover the symptoms, causes, and treatments for baby colic, including dietary and environmental factors that can contribute to colic. Students will learn about the various strategies for preventing colic, such as proper feeding techniques, creating a calm and relaxing environment for the baby, and minimizing stress for both the baby and the parents. The course will also provide information on the different types of therapies and remedies that can help soothe colic, such as massage, aromatherapy, and more. Additionally, the course will address the challenges that come with caring for a colicky baby, such as sleep deprivation and stress, and will provide practical tips and advice for managing these challenges. By the end of the course, students will have a comprehensive understanding of baby colic and the strategies they can use to prevent and manage it.",
        category: "Other",
        level: "Advance",
        attendees: [
          { full_name: "Noah Davis" },
          { full_name: "Sophia Wilson" },
          { full_name: "Liam Wilson" },
        ],
      },
      {
        id: 15,
        speaker: {
          name: "Nir Kravetzky",
          pictureUrl: "src/assets/nir.jpg",
        },
        name: "Coralogix Log Management",
        date: "11/10/23",
        location: "Tavor",
        description:
          "'Coralogix Log Management' is a course that teaches how to use Coralogix for log management and analysis.",
        details:
          "'Coralogix Log Management' is a course that teaches how to use Coralogix for log management and analysis. The course covers the basics of log management and analysis and will introduce students to the Coralogix platform, including its features and functionalities. Students will learn how to collect, analyze, and visualize log data with Coralogix and how to use its machine learning algorithms to detect and resolve issues more quickly. The course will also cover how to set up and manage alerts, how to integrate Coralogix with other tools and systems, and how to collaborate with team members on log management tasks. Additionally, the course will provide hands-on exercises and real-world examples to help students apply their knowledge and skills in a practical setting. By the end of the course, students will have a comprehensive understanding of log management and analysis using Coralogix and will be equipped with the knowledge and skills they need to effectively manage and analyze log data.",
        category: "tech",
        level: "Intermediate",
        attendees: [
          { full_name: "Ava Taylor" },
          { full_name: "Ethan Anderson" },
          { full_name: "Natalie Robinson" },
        ],
      },
    ],
    closedCourses: [
      {
        id: 16,
        speaker: {
          name: "Narkis Daniel",
          pictureUrl: "src/assets/Narkis.jpg",
        },
        name: "Cooking",
        date: "13/01/23",
        location: "Apolonoa",
        description:
          "Cooking 101 is a comprehensive course that covers the fundamentals of cooking and baking. Students will learn the basics of kitchen safety, knife skills, and cooking techniques while creating delicious meals and baked goods.",
        details:
          "Cooking 101 is a beginner-friendly course that covers the basics of cooking and baking. Students will learn about kitchen safety, including food storage and preparation, as well as essential knife skills and cooking techniques. The course covers a range of cuisines and cooking styles, including baking, roasting, sautéing, and more. Students will learn how to use recipes to create delicious meals and baked goods, and how to adjust recipes to meet their dietary needs and preferences. Throughout the course, students will practice their skills by creating meals and baked goods in a virtual kitchen, and receive feedback from instructors and peers. Whether you are a complete beginner or simply looking to improve your cooking skills, Cooking 101 is the perfect place to start.",
        category: "hobbies",
        level: "Beginner",
        attendees: [
          { full_name: "John Doe" },
          { full_name: "Jane Smith" },
          { full_name: "Bob Johnson" },
          { full_name: "Emma Brown" },
          { full_name: "Michael Williams" },
          { full_name: "Emily Davis" },
          { full_name: "William Taylor" },
          { full_name: "Daniel Wilson" },
          { full_name: "Sophia Lee" },
          { full_name: "James Martinez" },
        ],
      },
      {
        id: 17,
        speaker: {
          name: "Jenny Kolmanovich",
          pictureUrl: "src/assets/jenny.jpg",
        },
        name: "Russian",
        date: "02/02/23",
        location: "Apolonoa",
        description:
          "Learn Russian is a comprehensive course that will help students develop a strong foundation in the Russian language. From beginner to advanced, students will learn to read, write, and speak the language with confidence.",
        details:
          "The Learn Russian course is designed for students of all levels, from complete beginners to those who have some prior knowledge of the language. The course covers all essential aspects of the language, including grammar, vocabulary, pronunciation, and conversational skills. Students will learn to read and write in the Cyrillic alphabet and develop their listening and speaking skills through interactive activities and discussions. The course also includes practical exercises and real-life scenarios to help students apply their newfound knowledge in real-world situations. Whether you are a student, a traveler, or simply interested in learning a new language, this course will provide you with the skills and confidence you need to communicate effectively in Russian.",
        category: "other",
        level: "Beginner",
        attendees: [
          { full_name: "John Doe" },
          { full_name: "Jane Smith" },
          { full_name: "Bob Johnson" },
          { full_name: "Emma Brown" },
          { full_name: "Michael Williams" },
          { full_name: "Emily Davis" },
          { full_name: "William Taylor" },
          { full_name: "Daniel Wilson" },
          { full_name: "Sophia Lee" },
          { full_name: "James Martinez" },
        ],
      },
    ],
  }),
  getters: {
    topCourses: (state) => {
      const topValues = state.openCourses.sort(
        (a, b) => b.attendees.length - a.attendees.length
      );
      return topValues.slice(0, 3);
    },
  },
  actions: {
    addSession(newSession) {
      let max = 0;
      this.openCourses.forEach((session) => {
        if (session.id > max) {
          max = session.id;
        }
      });
      console.log("max :>> ", max);
      newSession.id = max++;
      console.log('cloneDeep(newSession) :>> ', cloneDeep(newSession));
      this.openCourses.push(cloneDeep(newSession));
    },
  },
});
