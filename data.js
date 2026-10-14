const UNITS=[
  {
    "id": "u001",
    "subject": "線性代數",
    "order": 1,
    "chapter": "線性方程組",
    "title": "線性方程組、幾何觀點與 Ax=b",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": true
  },
  {
    "id": "u002",
    "subject": "線性代數",
    "order": 2,
    "chapter": "線性方程組",
    "title": "Gaussian elimination、RREF 與解的結構",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": true
  },
  {
    "id": "u003",
    "subject": "線性代數",
    "order": 3,
    "chapter": "矩陣",
    "title": "矩陣運算與矩陣代數",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u004",
    "subject": "線性代數",
    "order": 4,
    "chapter": "矩陣",
    "title": "反矩陣與 elementary matrices",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u005",
    "subject": "線性代數",
    "order": 5,
    "chapter": "Determinant",
    "title": "Determinant 計算：cofactor 與 row reduction",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": true
  },
  {
    "id": "u006",
    "subject": "線性代數",
    "order": 6,
    "chapter": "Determinant",
    "title": "Determinant 性質與 invertibility",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": true
  },
  {
    "id": "u007",
    "subject": "線性代數",
    "order": 7,
    "chapter": "向量空間",
    "title": "Vector space 與 subspace",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u008",
    "subject": "線性代數",
    "order": 8,
    "chapter": "向量空間",
    "title": "Span、generating set 與 subspace test",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u009",
    "subject": "線性代數",
    "order": 9,
    "chapter": "向量空間",
    "title": "Linear independence／dependence",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u010",
    "subject": "線性代數",
    "order": 10,
    "chapter": "向量空間",
    "title": "Basis 與 coordinate vector",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u011",
    "subject": "線性代數",
    "order": 11,
    "chapter": "向量空間",
    "title": "Dimension",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u012",
    "subject": "線性代數",
    "order": 12,
    "chapter": "基本子空間",
    "title": "Row space、column space、null space",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u013",
    "subject": "線性代數",
    "order": 13,
    "chapter": "基本子空間",
    "title": "Rank–nullity 與四個基本子空間",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u014",
    "subject": "線性代數",
    "order": 14,
    "chapter": "線性轉換",
    "title": "Linear transformation 基本性質",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u015",
    "subject": "線性代數",
    "order": 15,
    "chapter": "線性轉換",
    "title": "Kernel、image 與一對一／映成",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u016",
    "subject": "線性代數",
    "order": 16,
    "chapter": "線性轉換",
    "title": "線性轉換的矩陣表示",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u017",
    "subject": "線性代數",
    "order": 17,
    "chapter": "線性轉換",
    "title": "Change of basis 與 similarity",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u018",
    "subject": "線性代數",
    "order": 18,
    "chapter": "特徵理論",
    "title": "Eigenvalue、eigenvector 與 characteristic polynomial",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u019",
    "subject": "線性代數",
    "order": 19,
    "chapter": "特徵理論",
    "title": "Eigenspace 與 algebraic／geometric multiplicity",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u020",
    "subject": "線性代數",
    "order": 20,
    "chapter": "特徵理論",
    "title": "Diagonalization",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u021",
    "subject": "線性代數",
    "order": 21,
    "chapter": "特徵理論",
    "title": "Cayley–Hamilton 與 minimal polynomial",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u022",
    "subject": "線性代數",
    "order": 22,
    "chapter": "特徵理論",
    "title": "Jordan canonical form",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u023",
    "subject": "線性代數",
    "order": 23,
    "chapter": "內積空間",
    "title": "Inner product、norm、distance、angle",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u024",
    "subject": "線性代數",
    "order": 24,
    "chapter": "內積空間",
    "title": "Orthogonality 與 orthogonal complement",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u025",
    "subject": "線性代數",
    "order": 25,
    "chapter": "內積空間",
    "title": "Gram–Schmidt 與 QR decomposition",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u026",
    "subject": "線性代數",
    "order": 26,
    "chapter": "內積空間",
    "title": "Orthogonal projection 與 least squares",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u027",
    "subject": "線性代數",
    "order": 27,
    "chapter": "對稱矩陣",
    "title": "Symmetric matrices 與 orthogonal diagonalization",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u028",
    "subject": "線性代數",
    "order": 28,
    "chapter": "二次型／分解",
    "title": "Quadratic forms 與 SVD",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u029",
    "subject": "離散數學",
    "order": 1,
    "chapter": "Logic and Proofs",
    "title": "Lec01｜Logic and Proofs（1/5）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": true
  },
  {
    "id": "u030",
    "subject": "離散數學",
    "order": 2,
    "chapter": "Logic and Proofs",
    "title": "Lec02｜Logic and Proofs（2/5）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": true
  },
  {
    "id": "u031",
    "subject": "離散數學",
    "order": 3,
    "chapter": "Logic and Proofs",
    "title": "Lec03｜Logic and Proofs（3/5）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": true
  },
  {
    "id": "u032",
    "subject": "離散數學",
    "order": 4,
    "chapter": "Logic and Proofs",
    "title": "Lec04｜Logic and Proofs（4/5）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": true
  },
  {
    "id": "u033",
    "subject": "離散數學",
    "order": 5,
    "chapter": "Logic and Proofs／Sets",
    "title": "Lec05｜Logic and Proofs（5/5）／Sets（1/3）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": true
  },
  {
    "id": "u034",
    "subject": "離散數學",
    "order": 6,
    "chapter": "Sets, Functions, Sequences, and Sums",
    "title": "Lec06｜Sets, Functions, Sequences, and Sums（2/3）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": true
  },
  {
    "id": "u035",
    "subject": "離散數學",
    "order": 7,
    "chapter": "Sets, Functions, Sequences, and Sums",
    "title": "Lec07｜Sets, Functions, Sequences, and Sums（3/3）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": true
  },
  {
    "id": "u036",
    "subject": "離散數學",
    "order": 8,
    "chapter": "Algorithms and the Integers",
    "title": "Lec08｜Algorithms and the Integers（1/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u037",
    "subject": "離散數學",
    "order": 9,
    "chapter": "Algorithms and the Integers",
    "title": "Lec09｜Algorithms and the Integers（2/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u038",
    "subject": "離散數學",
    "order": 10,
    "chapter": "Algorithms and the Integers",
    "title": "Lec10｜Algorithms and the Integers（3/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u039",
    "subject": "離散數學",
    "order": 11,
    "chapter": "Algorithms and the Integers／Induction",
    "title": "Lec11｜Algorithms and the Integers（4/4）／Induction（1/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u040",
    "subject": "離散數學",
    "order": 12,
    "chapter": "Induction and Recur",
    "title": "Lec12｜Induction and Recur（2/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u041",
    "subject": "離散數學",
    "order": 13,
    "chapter": "Induction and Recur",
    "title": "Lec13｜Induction and Recur（3/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u042",
    "subject": "離散數學",
    "order": 14,
    "chapter": "Induction and Recur／Counting",
    "title": "Lec14｜Induction and Recur（4/4）／Counting（1/2）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u043",
    "subject": "離散數學",
    "order": 15,
    "chapter": "Counting",
    "title": "Lec15｜Counting（2/2）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u044",
    "subject": "離散數學",
    "order": 16,
    "chapter": "Advanced Counting Techniques",
    "title": "Lec16｜Advanced Counting Techniques（1/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u045",
    "subject": "離散數學",
    "order": 17,
    "chapter": "Advanced Counting Techniques",
    "title": "Lec17｜Advanced Counting Techniques（2/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u046",
    "subject": "離散數學",
    "order": 18,
    "chapter": "Advanced Counting Techniques",
    "title": "Lec18｜Advanced Counting Techniques（3/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u047",
    "subject": "離散數學",
    "order": 19,
    "chapter": "Advanced Counting／Relations",
    "title": "Lec19｜Advanced Counting（4/4）／Relations（1/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u048",
    "subject": "離散數學",
    "order": 20,
    "chapter": "Relations",
    "title": "Lec20｜Relations（2/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u049",
    "subject": "離散數學",
    "order": 21,
    "chapter": "Relations",
    "title": "Lec21｜Relations（3/4）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u050",
    "subject": "離散數學",
    "order": 22,
    "chapter": "Relations／Graphs",
    "title": "Lec22｜Relations（4/4）／Graphs（1/3）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u051",
    "subject": "離散數學",
    "order": 23,
    "chapter": "Graphs",
    "title": "Lec23｜Graphs（2/3）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u052",
    "subject": "離散數學",
    "order": 24,
    "chapter": "Graphs",
    "title": "Lec24｜Graphs（3/3）",
    "source": "NYCU OCW",
    "note": "依易志偉 OCW 講次",
    "done": false
  },
  {
    "id": "u053",
    "subject": "資料結構",
    "order": 1,
    "chapter": "基礎",
    "title": "ADT 與時間／空間複雜度回收",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u054",
    "subject": "資料結構",
    "order": 2,
    "chapter": "線性結構",
    "title": "Array 與 String",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u055",
    "subject": "資料結構",
    "order": 3,
    "chapter": "線性結構",
    "title": "Singly linked list",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u056",
    "subject": "資料結構",
    "order": 4,
    "chapter": "線性結構",
    "title": "Doubly／circular linked list",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u057",
    "subject": "資料結構",
    "order": 5,
    "chapter": "線性結構",
    "title": "Stack",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u058",
    "subject": "資料結構",
    "order": 6,
    "chapter": "線性結構",
    "title": "Queue 與 deque",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u059",
    "subject": "資料結構",
    "order": 7,
    "chapter": "遞迴",
    "title": "Recursion 與 activation record",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u060",
    "subject": "資料結構",
    "order": 8,
    "chapter": "樹",
    "title": "Binary tree 表示與基本性質",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u061",
    "subject": "資料結構",
    "order": 9,
    "chapter": "樹",
    "title": "Tree traversal",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u062",
    "subject": "資料結構",
    "order": 10,
    "chapter": "樹",
    "title": "Threaded binary tree 與 expression tree",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u063",
    "subject": "資料結構",
    "order": 11,
    "chapter": "搜尋樹",
    "title": "Binary search tree",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u064",
    "subject": "資料結構",
    "order": 12,
    "chapter": "搜尋樹",
    "title": "AVL tree",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u065",
    "subject": "資料結構",
    "order": 13,
    "chapter": "搜尋樹",
    "title": "Red–black tree",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u066",
    "subject": "資料結構",
    "order": 14,
    "chapter": "優先佇列",
    "title": "Heap 與 priority queue",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u067",
    "subject": "資料結構",
    "order": 15,
    "chapter": "多路搜尋樹",
    "title": "B-tree 與 B+ tree",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u068",
    "subject": "資料結構",
    "order": 16,
    "chapter": "集合",
    "title": "Disjoint set／union–find",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u069",
    "subject": "資料結構",
    "order": 17,
    "chapter": "雜湊",
    "title": "Hashing 與 collision resolution",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u070",
    "subject": "資料結構",
    "order": 18,
    "chapter": "圖",
    "title": "Graph representation",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u071",
    "subject": "資料結構",
    "order": 19,
    "chapter": "圖",
    "title": "BFS／DFS 與 traversal 狀態",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u072",
    "subject": "資料結構",
    "order": 20,
    "chapter": "排序",
    "title": "Insertion／selection／bubble sort",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u073",
    "subject": "資料結構",
    "order": 21,
    "chapter": "排序",
    "title": "Merge／quick／heap sort",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u074",
    "subject": "資料結構",
    "order": 22,
    "chapter": "排序",
    "title": "Counting／radix／external sorting",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u075",
    "subject": "演算法",
    "order": 1,
    "chapter": "分析基礎",
    "title": "Asymptotic analysis：O、Ω、Θ",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u076",
    "subject": "演算法",
    "order": 2,
    "chapter": "分析基礎",
    "title": "Summations 與 loop complexity",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u077",
    "subject": "演算法",
    "order": 3,
    "chapter": "分析基礎",
    "title": "Recurrence relations 與 Master theorem",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u078",
    "subject": "演算法",
    "order": 4,
    "chapter": "Divide and Conquer",
    "title": "Divide-and-conquer 設計與分析",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u079",
    "subject": "演算法",
    "order": 5,
    "chapter": "排序／選擇",
    "title": "Comparison sorting 與 lower bound",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u080",
    "subject": "演算法",
    "order": 6,
    "chapter": "排序／選擇",
    "title": "Selection 與 order statistics",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u081",
    "subject": "演算法",
    "order": 7,
    "chapter": "Greedy",
    "title": "Greedy choice 與正確性證明",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u082",
    "subject": "演算法",
    "order": 8,
    "chapter": "Greedy",
    "title": "Activity selection 與 Huffman coding",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u083",
    "subject": "演算法",
    "order": 9,
    "chapter": "Graph",
    "title": "Minimum spanning tree",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u084",
    "subject": "演算法",
    "order": 10,
    "chapter": "Graph",
    "title": "Single-source／all-pairs shortest paths",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u085",
    "subject": "演算法",
    "order": 11,
    "chapter": "Dynamic Programming",
    "title": "Dynamic programming 設計方法",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u086",
    "subject": "演算法",
    "order": 12,
    "chapter": "Dynamic Programming",
    "title": "LCS、knapsack、matrix-chain multiplication",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u087",
    "subject": "演算法",
    "order": 13,
    "chapter": "Graph",
    "title": "Topological sort 與 strongly connected components",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u088",
    "subject": "演算法",
    "order": 14,
    "chapter": "Graph",
    "title": "Maximum flow 與 minimum cut",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u089",
    "subject": "演算法",
    "order": 15,
    "chapter": "Graph",
    "title": "Bipartite matching",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u090",
    "subject": "演算法",
    "order": 16,
    "chapter": "進階分析",
    "title": "Amortized analysis",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u091",
    "subject": "演算法",
    "order": 17,
    "chapter": "進階分析",
    "title": "Randomized algorithms",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u092",
    "subject": "演算法",
    "order": 18,
    "chapter": "搜尋",
    "title": "Backtracking 與 branch-and-bound",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u093",
    "subject": "演算法",
    "order": 19,
    "chapter": "複雜度理論",
    "title": "P、NP、reduction 與 NP-completeness",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u094",
    "subject": "演算法",
    "order": 20,
    "chapter": "複雜度理論",
    "title": "Approximation 與 tractability",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u095",
    "subject": "作業系統",
    "order": 1,
    "chapter": "Historical Prospective",
    "title": "第01講｜Syllabus／Ch0 Historical Prospective",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u096",
    "subject": "作業系統",
    "order": 2,
    "chapter": "Historical Prospective",
    "title": "第02講｜Ch0 Historical Prospective",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u097",
    "subject": "作業系統",
    "order": 3,
    "chapter": "Introduction",
    "title": "第03講｜Ch1 Introduction",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u098",
    "subject": "作業系統",
    "order": 4,
    "chapter": "Introduction",
    "title": "第04講｜Ch1 Introduction",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u099",
    "subject": "作業系統",
    "order": 5,
    "chapter": "OS Structure",
    "title": "第05講｜Nachos Explanation／Ch2 OS Structure",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u100",
    "subject": "作業系統",
    "order": 6,
    "chapter": "OS Structure／Processes",
    "title": "第06講｜Ch2 OS Structure／Ch3 Processes Concept",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u101",
    "subject": "作業系統",
    "order": 7,
    "chapter": "Processes Concept",
    "title": "第07講｜Ch3 Processes Concept",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u102",
    "subject": "作業系統",
    "order": 8,
    "chapter": "Processes Concept",
    "title": "第08講｜Ch3 Processes Concept",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": true
  },
  {
    "id": "u103",
    "subject": "作業系統",
    "order": 9,
    "chapter": "Processes Concept",
    "title": "第09講｜Ch3 Processes Concept",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u104",
    "subject": "作業系統",
    "order": 10,
    "chapter": "Memory Management",
    "title": "第10講｜Ch8 Memory Management",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u105",
    "subject": "作業系統",
    "order": 11,
    "chapter": "Memory Management",
    "title": "第11講｜Ch8 Memory Management",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u106",
    "subject": "作業系統",
    "order": 12,
    "chapter": "Memory Management",
    "title": "第12講｜Ch8 Memory Management",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u107",
    "subject": "作業系統",
    "order": 13,
    "chapter": "Virtual Memory",
    "title": "第13講｜Ch9 Virtual Memory Management",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u108",
    "subject": "作業系統",
    "order": 14,
    "chapter": "Virtual Memory",
    "title": "第14講｜Ch9 Virtual Memory Management",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u109",
    "subject": "作業系統",
    "order": 15,
    "chapter": "Multithreaded Programming",
    "title": "第15講｜Ch4 Multithreaded Programming",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u110",
    "subject": "作業系統",
    "order": 16,
    "chapter": "Threads／Scheduling",
    "title": "第16講｜Ch4 Multithreaded Programming／Ch5 Process Scheduling",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u111",
    "subject": "作業系統",
    "order": 17,
    "chapter": "Process Scheduling",
    "title": "第17講｜Ch5 Process Scheduling",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u112",
    "subject": "作業系統",
    "order": 18,
    "chapter": "Scheduling／Synchronization",
    "title": "第18講｜Ch5 Process Scheduling／Ch6 Process Synchronization",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u113",
    "subject": "作業系統",
    "order": 19,
    "chapter": "Process Synchronization",
    "title": "第19講｜Ch6 Process Synchronization",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u114",
    "subject": "作業系統",
    "order": 20,
    "chapter": "Process Synchronization",
    "title": "第20講｜Midterm Explanation／Ch6 Process Synchronization",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u115",
    "subject": "作業系統",
    "order": 21,
    "chapter": "Process Synchronization",
    "title": "第21講｜Ch6 Process Synchronization",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u116",
    "subject": "作業系統",
    "order": 22,
    "chapter": "Deadlocks",
    "title": "第22講｜Ch7 Deadlocks",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u117",
    "subject": "作業系統",
    "order": 23,
    "chapter": "File Systems",
    "title": "第23講｜Ch10 File System Interface／Ch11 Implementation",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u118",
    "subject": "作業系統",
    "order": 24,
    "chapter": "File System Implementation",
    "title": "第24講｜Ch11 File System Implementation",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u119",
    "subject": "作業系統",
    "order": 25,
    "chapter": "File System／Storage",
    "title": "第25講｜Ch11 Implementation／Ch12 Mass Storage",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u120",
    "subject": "作業系統",
    "order": 26,
    "chapter": "Storage／I/O",
    "title": "第26講｜Ch12 Mass Storage／Ch13 I/O Systems",
    "source": "NTHU OCW",
    "note": "依周志遠 OCW 講次",
    "done": false
  },
  {
    "id": "u121",
    "subject": "計算機組織",
    "order": 1,
    "chapter": "效能",
    "title": "Performance、CPU time、CPI 與 Amdahl’s law",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u122",
    "subject": "計算機組織",
    "order": 2,
    "chapter": "資料表示",
    "title": "Number representation、endianness 與 alignment",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u123",
    "subject": "計算機組織",
    "order": 3,
    "chapter": "電腦算術",
    "title": "Signed／unsigned arithmetic 與 overflow",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u124",
    "subject": "計算機組織",
    "order": 4,
    "chapter": "電腦算術",
    "title": "ALU、multiplication 與 division",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u125",
    "subject": "計算機組織",
    "order": 5,
    "chapter": "電腦算術",
    "title": "Floating-point representation 與 operations",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u126",
    "subject": "計算機組織",
    "order": 6,
    "chapter": "ISA",
    "title": "Instruction set、formats 與 addressing modes",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u127",
    "subject": "計算機組織",
    "order": 7,
    "chapter": "ISA",
    "title": "Assembly、procedure call 與 stack",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u128",
    "subject": "計算機組織",
    "order": 8,
    "chapter": "處理器",
    "title": "Single-cycle datapath",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u129",
    "subject": "計算機組織",
    "order": 9,
    "chapter": "處理器",
    "title": "Control unit 與 control signals",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u130",
    "subject": "計算機組織",
    "order": 10,
    "chapter": "處理器",
    "title": "Multi-cycle datapath",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u131",
    "subject": "計算機組織",
    "order": 11,
    "chapter": "Pipeline",
    "title": "Pipelining 基本原理與 performance",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u132",
    "subject": "計算機組織",
    "order": 12,
    "chapter": "Pipeline",
    "title": "Data hazards、forwarding 與 stalls",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u133",
    "subject": "計算機組織",
    "order": 13,
    "chapter": "Pipeline",
    "title": "Control hazards 與 branch prediction",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u134",
    "subject": "計算機組織",
    "order": 14,
    "chapter": "Pipeline",
    "title": "Exceptions 與 interrupts",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u135",
    "subject": "計算機組織",
    "order": 15,
    "chapter": "Memory Hierarchy",
    "title": "Memory hierarchy 與 locality",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u136",
    "subject": "計算機組織",
    "order": 16,
    "chapter": "Cache",
    "title": "Cache mapping：direct／set-associative／fully associative",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u137",
    "subject": "計算機組織",
    "order": 17,
    "chapter": "Cache",
    "title": "Cache performance 與 miss penalty",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u138",
    "subject": "計算機組織",
    "order": 18,
    "chapter": "Cache",
    "title": "Write policies 與 multilevel cache",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u139",
    "subject": "計算機組織",
    "order": 19,
    "chapter": "Virtual Memory",
    "title": "Virtual memory 與 page table",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u140",
    "subject": "計算機組織",
    "order": 20,
    "chapter": "Virtual Memory",
    "title": "TLB 與 address translation",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u141",
    "subject": "計算機組織",
    "order": 21,
    "chapter": "Storage",
    "title": "Disk、SSD 與 RAID",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u142",
    "subject": "計算機組織",
    "order": 22,
    "chapter": "I/O",
    "title": "I/O、interrupt、DMA 與 bus",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u143",
    "subject": "計算機組織",
    "order": 23,
    "chapter": "Parallelism",
    "title": "Multicore、cache coherence 與 memory consistency",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  },
  {
    "id": "u144",
    "subject": "計算機組織",
    "order": 24,
    "chapter": "Parallelism",
    "title": "Parallel performance 與 speedup",
    "source": "考研核心範圍",
    "note": "每單元約 1.5～2.5 小時",
    "done": false
  }
];

