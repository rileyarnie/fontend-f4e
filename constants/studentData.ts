export type StudentDataType = {
  firstName: string;
  middleName: string;
  lastName: string;
  image: string;
  dateOfBirth: string;
  gender: string;
  grade: string;
  parent: {
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
  };
};

export const studentData: StudentDataType[] = [
  {
    firstName: "John",
    middleName: "Dennis",
    lastName: "Doe",
    image: "www.dummy.org/image/image1.png",
    dateOfBirth: "2000-01-01",
    gender: "Male",
    grade: "CLASS 1",
    parent: {
      firstName: "James",
      middleName: "Albert",
      lastName: "Doe",
      phoneNumber: "25470000001",
    },
  },
  {
    firstName: "Michael",
    middleName: "James",
    lastName: "Smith",
    image: "www.dummy.org/image/image2.png",
    dateOfBirth: "2001-02-02",
    gender: "Male",
    grade: "CLASS 2",
    parent: {
      firstName: "Robert",
      middleName: "John",
      lastName: "Smith",
      phoneNumber: "25470000002",
    },
  },
  {
    firstName: "David",
    middleName: "Alexander",
    lastName: "Johnson",
    image: "www.dummy.org/image/image3.png",
    dateOfBirth: "2002-03-03",
    gender: "Male",
    grade: "CLASS 3",
    parent: {
      firstName: "William",
      middleName: "Henry",
      lastName: "Johnson",
      phoneNumber: "25470000003",
    },
  },
  {
    firstName: "Chris",
    middleName: "Lee",
    lastName: "Brown",
    image: "www.dummy.org/image/image4.png",
    dateOfBirth: "2003-04-04",
    gender: "Male",
    grade: "CLASS 4",
    parent: {
      firstName: "Charles",
      middleName: "Edward",
      lastName: "Brown",
      phoneNumber: "25470000004",
    },
  },
  {
    firstName: "Jessica",
    middleName: "Marie",
    lastName: "Jones",
    image: "www.dummy.org/image/image5.png",
    dateOfBirth: "2004-05-05",
    gender: "Female",
    grade: "CLASS 5",
    parent: {
      firstName: "Thomas",
      middleName: "Richard",
      lastName: "Jones",
      phoneNumber: "25470000005",
    },
  },
  {
    firstName: "Emily",
    middleName: "Grace",
    lastName: "Garcia",
    image: "www.dummy.org/image/image6.png",
    dateOfBirth: "2005-06-06",
    gender: "Female",
    grade: "CLASS 6",
    parent: {
      firstName: "Joseph",
      middleName: "David",
      lastName: "Garcia",
      phoneNumber: "25470000006",
    },
  },
  {
    firstName: "Daniel",
    middleName: "Paul",
    lastName: "Martinez",
    image: "www.dummy.org/image/image7.png",
    dateOfBirth: "2006-07-07",
    gender: "Male",
    grade: "CLASS 7",
    parent: {
      firstName: "Christopher",
      middleName: "Michael",
      lastName: "Martinez",
      phoneNumber: "25470000007",
    },
  },
  {
    firstName: "Sarah",
    middleName: "Ann",
    lastName: "Hernandez",
    image: "www.dummy.org/image/image8.png",
    dateOfBirth: "2007-08-08",
    gender: "Female",
    grade: "CLASS 8",
    parent: {
      firstName: "Daniel",
      middleName: "William",
      lastName: "Hernandez",
      phoneNumber: "25470000008",
    },
  },
  {
    firstName: "Matthew",
    middleName: "James",
    lastName: "Lopez",
    image: "www.dummy.org/image/image9.png",
    dateOfBirth: "2008-09-09",
    gender: "Male",
    grade: "CLASS 1",
    parent: {
      firstName: "Anthony",
      middleName: "Joseph",
      lastName: "Lopez",
      phoneNumber: "25470000009",
    },
  },
  {
    firstName: "Ashley",
    middleName: "Nicole",
    lastName: "Gonzalez",
    image: "www.dummy.org/image/image10.png",
    dateOfBirth: "2009-10-10",
    gender: "Female",
    grade: "CLASS 2",
    parent: {
      firstName: "Mark",
      middleName: "Charles",
      lastName: "Gonzalez",
      phoneNumber: "25470000010",
    },
  },
  {
    firstName: "Joshua",
    middleName: "Daniel",
    lastName: "Wilson",
    image: "www.dummy.org/image/image11.png",
    dateOfBirth: "2010-11-11",
    gender: "Male",
    grade: "CLASS 3",
    parent: {
      firstName: "Matthew",
      middleName: "Andrew",
      lastName: "Wilson",
      phoneNumber: "25470000011",
    },
  },
  {
    firstName: "Amanda",
    middleName: "Beth",
    lastName: "Anderson",
    image: "www.dummy.org/image/image12.png",
    dateOfBirth: "2011-12-12",
    gender: "Female",
    grade: "CLASS 4",
    parent: {
      firstName: "Donald",
      middleName: "Christopher",
      lastName: "Anderson",
      phoneNumber: "25470000012",
    },
  },
  {
    firstName: "Christopher",
    middleName: "Michael",
    lastName: "Thomas",
    image: "www.dummy.org/image/image13.png",
    dateOfBirth: "2012-01-13",
    gender: "Male",
    grade: "CLASS 5",
    parent: {
      firstName: "Brian",
      middleName: "David",
      lastName: "Thomas",
      phoneNumber: "25470000013",
    },
  },
  {
    firstName: "Megan",
    middleName: "Elizabeth",
    lastName: "Taylor",
    image: "www.dummy.org/image/image14.png",
    dateOfBirth: "2013-02-14",
    gender: "Female",
    grade: "CLASS 6",
    parent: {
      firstName: "Kevin",
      middleName: "Robert",
      lastName: "Taylor",
      phoneNumber: "25470000014",
    },
  },
  {
    firstName: "Andrew",
    middleName: "Scott",
    lastName: "Moore",
    image: "www.dummy.org/image/image15.png",
    dateOfBirth: "2014-03-15",
    gender: "Male",
    grade: "CLASS 7",
    parent: {
      firstName: "George",
      middleName: "Kenneth",
      lastName: "Moore",
      phoneNumber: "25470000015",
    },
  },
  {
    firstName: "Brittany",
    middleName: "Lynn",
    lastName: "Jackson",
    image: "www.dummy.org/image/image16.png",
    dateOfBirth: "2015-04-16",
    gender: "Female",
    grade: "CLASS 8",
    parent: {
      firstName: "Steven",
      middleName: "Eric",
      lastName: "Jackson",
      phoneNumber: "25470000016",
    },
  },
  {
    firstName: "Justin",
    middleName: "William",
    lastName: "White",
    image: "www.dummy.org/image/image17.png",
    dateOfBirth: "2016-05-17",
    gender: "Male",
    grade: "CLASS 1",
    parent: {
      firstName: "Edward",
      middleName: "Paul",
      lastName: "White",
      phoneNumber: "25470000017",
    },
  },
  {
    firstName: "Lauren",
    middleName: "Marie",
    lastName: "Harris",
    image: "www.dummy.org/image/image18.png",
    dateOfBirth: "2017-06-18",
    gender: "Female",
    grade: "CLASS 2",
    parent: {
      firstName: "Jason",
      middleName: "Thomas",
      lastName: "Harris",
      phoneNumber: "25470000018",
    },
  },
  {
    firstName: "Ryan",
    middleName: "Joseph",
    lastName: "Clark",
    image: "www.dummy.org/image/image19.png",
    dateOfBirth: "2018-07-19",
    gender: "Male",
    grade: "CLASS 3",
    parent: {
      firstName: "Paul",
      middleName: "Donald",
      lastName: "Clark",
      phoneNumber: "25470000019",
    },
  },
  {
    firstName: "Stephanie",
    middleName: "Anne",
    lastName: "Lewis",
    image: "www.dummy.org/image/image20.png",
    dateOfBirth: "2019-08-20",
    gender: "Female",
    grade: "CLASS 4",
    parent: {
      firstName: "Larry",
      middleName: "Patrick",
      lastName: "Lewis",
      phoneNumber: "25470000020",
    },
  },
  {
    firstName: "Brandon",
    middleName: "Lee",
    lastName: "Walker",
    image: "www.dummy.org/image/image21.png",
    dateOfBirth: "2020-09-21",
    gender: "Male",
    grade: "CLASS 5",
    parent: {
      firstName: "Frank",
      middleName: "Timothy",
      lastName: "Walker",
      phoneNumber: "25470000021",
    },
  },
  {
    firstName: "Rachel",
    middleName: "Marie",
    lastName: "Hall",
    image: "www.dummy.org/image/image22.png",
    dateOfBirth: "2021-10-22",
    gender: "Female",
    grade: "CLASS 6",
    parent: {
      firstName: "Jack",
      middleName: "Howard",
      lastName: "Hall",
      phoneNumber: "25470000022",
    },
  },
  {
    firstName: "Kyle",
    middleName: "Robert",
    lastName: "Allen",
    image: "www.dummy.org/image/image23.png",
    dateOfBirth: "2022-11-23",
    gender: "Male",
    grade: "CLASS 7",
    parent: {
      firstName: "Henry",
      middleName: "Arthur",
      lastName: "Allen",
      phoneNumber: "25470000023",
    },
  },
  {
    firstName: "Amber",
    middleName: "Nicole",
    lastName: "Young",
    image: "www.dummy.org/image/image24.png",
    dateOfBirth: "2023-12-24",
    gender: "Female",
    grade: "CLASS 8",
    parent: {
      firstName: "Harry",
      middleName: "Peter",
      lastName: "Young",
      phoneNumber: "25470000024",
    },
  },
  {
    firstName: "Jonathan",
    middleName: "Edward",
    lastName: "Hernandez",
    image: "www.dummy.org/image/image25.png",
    dateOfBirth: "2024-01-25",
    gender: "Male",
    grade: "CLASS 1",
    parent: {
      firstName: "Kenneth",
      middleName: "Louis",
      lastName: "Hernandez",
      phoneNumber: "25470000025",
    },
  },
  {
    firstName: "Crystal",
    middleName: "Michelle",
    lastName: "King",
    image: "www.dummy.org/image/image26.png",
    dateOfBirth: "2025-02-26",
    gender: "Female",
    grade: "CLASS 2",
    parent: {
      firstName: "Bruce",
      middleName: "Wayne",
      lastName: "King",
      phoneNumber: "25470000026",
    },
  },
  {
    firstName: "Aaron",
    middleName: "Scott",
    lastName: "Wright",
    image: "www.dummy.org/image/image27.png",
    dateOfBirth: "2026-03-27",
    gender: "Male",
    grade: "CLASS 3",
    parent: {
      firstName: "Ronald",
      middleName: "Joseph",
      lastName: "Wright",
      phoneNumber: "25470000027",
    },
  },
  {
    firstName: "Hannah",
    middleName: "Marie",
    lastName: "Lopez",
    image: "www.dummy.org/image/image28.png",
    dateOfBirth: "2027-04-28",
    gender: "Female",
    grade: "CLASS 4",
    parent: {
      firstName: "Louis",
      middleName: "Mark",
      lastName: "Lopez",
      phoneNumber: "25470000028",
    },
  },
  {
    firstName: "Patrick",
    middleName: "James",
    lastName: "Hill",
    image: "www.dummy.org/image/image29.png",
    dateOfBirth: "2028-05-29",
    gender: "Male",
    grade: "CLASS 5",
    parent: {
      firstName: "Walter",
      middleName: "Michael",
      lastName: "Hill",
      phoneNumber: "25470000029",
    },
  },
  {
    firstName: "Olivia",
    middleName: "Rose",
    lastName: "Scott",
    image: "www.dummy.org/image/image30.png",
    dateOfBirth: "2029-06-30",
    gender: "Female",
    grade: "CLASS 6",
    parent: {
      firstName: "Albert",
      middleName: "John",
      lastName: "Scott",
      phoneNumber: "25470000030",
    },
  },
];
