import { type Subject, type PreviousYearPaper } from "@shared/schema";

export interface IStorage {
  getSubjects(): Promise<Subject[]>;
  getSubjectById(id: string): Promise<Subject | undefined>;
  getPapers(): Promise<PreviousYearPaper[]>;
  getPaperById(id: string): Promise<PreviousYearPaper | undefined>;
}

export class MemStorage implements IStorage {
  private subjects: Subject[];
  private papers: PreviousYearPaper[];

  constructor() {
    // Initialize with RGPV syllabus data
    this.subjects = [
      {
        id: "1",
        name: "Data Structures",
        code: "CS401",
        topics: [
          {
            title: "Arrays and Linked Lists",
            subtopics: [
              "Array Operations and Time Complexity",
              "Singly Linked List Implementation",
              "Doubly Linked List and Applications",
              "Circular Linked List"
            ]
          },
          {
            title: "Stacks and Queues",
            subtopics: [
              "Stack Implementation using Array and Linked List",
              "Queue Implementation and Variations",
              "Priority Queue and Heap",
              "Deque and Applications"
            ]
          },
          {
            title: "Trees",
            subtopics: [
              "Binary Tree Traversals (Inorder, Preorder, Postorder)",
              "Binary Search Tree Operations",
              "AVL Tree and Rotations",
              "B-Tree and B+ Tree"
            ]
          },
          {
            title: "Graphs",
            subtopics: [
              "Graph Representation (Adjacency Matrix, Adjacency List)",
              "Breadth First Search (BFS)",
              "Depth First Search (DFS)",
              "Shortest Path Algorithms (Dijkstra, Floyd-Warshall)"
            ]
          },
          {
            title: "Searching and Sorting",
            subtopics: [
              "Linear and Binary Search",
              "Bubble, Selection, and Insertion Sort",
              "Quick Sort and Merge Sort",
              "Heap Sort and Radix Sort"
            ]
          }
        ]
      },
      {
        id: "2",
        name: "Database Management Systems",
        code: "CS402",
        topics: [
          {
            title: "Introduction to DBMS",
            subtopics: [
              "Database Concepts and Architecture",
              "Data Models (Hierarchical, Network, Relational)",
              "Three Schema Architecture",
              "Database Users and Administrators"
            ]
          },
          {
            title: "SQL and Relational Algebra",
            subtopics: [
              "DDL Commands (CREATE, ALTER, DROP)",
              "DML Commands (INSERT, UPDATE, DELETE)",
              "Joins (Inner, Outer, Cross)",
              "Subqueries and Views"
            ]
          },
          {
            title: "Normalization",
            subtopics: [
              "Functional Dependencies",
              "First Normal Form (1NF)",
              "Second Normal Form (2NF)",
              "Third Normal Form (3NF) and BCNF"
            ]
          },
          {
            title: "Transaction Management",
            subtopics: [
              "ACID Properties",
              "Concurrency Control Techniques",
              "Deadlock Handling",
              "Recovery Techniques"
            ]
          }
        ]
      },
      {
        id: "3",
        name: "Operating Systems",
        code: "CS403",
        topics: [
          {
            title: "Process Management",
            subtopics: [
              "Process States and Process Control Block",
              "CPU Scheduling Algorithms",
              "Process Synchronization",
              "Deadlock Prevention and Avoidance"
            ]
          },
          {
            title: "Memory Management",
            subtopics: [
              "Contiguous Memory Allocation",
              "Paging and Segmentation",
              "Virtual Memory Concepts",
              "Page Replacement Algorithms"
            ]
          },
          {
            title: "File Systems",
            subtopics: [
              "File Concepts and Access Methods",
              "Directory Structure",
              "Disk Scheduling Algorithms",
              "File System Implementation"
            ]
          },
          {
            title: "I/O Systems",
            subtopics: [
              "I/O Hardware and Application Interface",
              "Kernel I/O Subsystem",
              "Disk Management",
              "RAID Levels"
            ]
          }
        ]
      },
      {
        id: "4",
        name: "Computer Networks",
        code: "CS404",
        topics: [
          {
            title: "Network Fundamentals",
            subtopics: [
              "OSI Reference Model",
              "TCP/IP Protocol Suite",
              "Network Topologies",
              "Transmission Media"
            ]
          },
          {
            title: "Data Link Layer",
            subtopics: [
              "Framing and Error Detection",
              "Flow Control Protocols",
              "Multiple Access Protocols",
              "Ethernet and LAN Technologies"
            ]
          },
          {
            title: "Network Layer",
            subtopics: [
              "IP Addressing and Subnetting",
              "Routing Algorithms",
              "Internet Protocol (IPv4 and IPv6)",
              "ICMP and ARP"
            ]
          },
          {
            title: "Transport Layer",
            subtopics: [
              "TCP and UDP Protocols",
              "Connection Management",
              "Flow and Congestion Control",
              "Socket Programming"
            ]
          }
        ]
      }
    ];

    this.papers = [
      {
        id: "1",
        title: "Data Structures - Mid Semester Examination",
        subject: "CS401",
        year: "2024",
        semester: "5th",
        size: "2.3 MB"
      },
      {
        id: "2",
        title: "Database Management Systems - End Semester Exam",
        subject: "CS402",
        year: "2023",
        semester: "5th",
        size: "1.8 MB"
      },
      {
        id: "3",
        title: "Operating Systems - Mid Semester",
        subject: "CS403",
        year: "2024",
        semester: "5th",
        size: "2.1 MB"
      },
      {
        id: "4",
        title: "Data Structures - End Semester Examination",
        subject: "CS401",
        year: "2023",
        semester: "5th",
        size: "2.5 MB"
      },
      {
        id: "5",
        title: "Database Management Systems - Mid Semester",
        subject: "CS402",
        year: "2024",
        semester: "5th",
        size: "1.9 MB"
      },
      {
        id: "6",
        title: "Operating Systems - End Semester Exam",
        subject: "CS403",
        year: "2023",
        semester: "5th",
        size: "2.4 MB"
      },
      {
        id: "7",
        title: "Computer Networks - Mid Semester Examination",
        subject: "CS404",
        year: "2024",
        semester: "6th",
        size: "2.0 MB"
      },
      {
        id: "8",
        title: "Computer Networks - End Semester Exam",
        subject: "CS404",
        year: "2023",
        semester: "6th",
        size: "2.2 MB"
      }
    ];
  }

  async getSubjects(): Promise<Subject[]> {
    return this.subjects;
  }

  async getSubjectById(id: string): Promise<Subject | undefined> {
    return this.subjects.find(subject => subject.id === id);
  }

  async getPapers(): Promise<PreviousYearPaper[]> {
    return this.papers;
  }

  async getPaperById(id: string): Promise<PreviousYearPaper | undefined> {
    return this.papers.find(paper => paper.id === id);
  }
}

export const storage = new MemStorage();
