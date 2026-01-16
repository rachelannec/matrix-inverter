# Automated Matrix Inverter

<div align="center">

<img src="./public/icon.png" alt ="Matrix Inverter" width = "120">

**A powerful interactive tool for inverting a matrix with step-by-step visualization**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-purple.svg)](https://vitejs.dev/)

[Report Bug](https://github.com/rachelannec/matrix-solver/issues/new?labels=bug&template=bug_report.md) | [Request Feature](https://github.com/rachelannec/matrix-solver/issues/new?labels=enhancement&template=feature_request.md)

</div>

---

## Table of Contents

- [Automated Matrix Inverter](#automated-matrix-inverter)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
    - [Why Matrix Inverter?](#why-matrix-inverter)
  - [Features](#features)
    - [Core Operation](#core-operation)
    - [User Experience](#user-experience)
    - [Additional Features](#additional-features)
  - [Demo](#demo)
    - [Matrix Inversion Example](#matrix-inversion-example)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
  - [Usage](#usage)
    - [Basic Workflow](#basic-workflow)
    - [Example:](#example)
  - [Operations](#operations)
    - [Matrix Inverse](#matrix-inverse)
  - [Technologies Used](#technologies-used)
    - [Frontend Framework](#frontend-framework)
    - [Styling](#styling)
    - [Mathematics](#mathematics)
    - [Development Tools](#development-tools)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
    - [How to Contribute](#how-to-contribute)
    - [Contribution Ideas](#contribution-ideas)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## About

**Matrix Inverter** is an automated tool designed to assist students and educators understand the concept of matrix inversion through an interactive interface. This tool not only shows the final answer, but also displays the detailed step-by-step solutions for matrices with varying dimensions, making it easier for learners to follow and learn from.

### Why Matrix Inverter?

- **Educational Focus**: Each step is explained in detail with mathematical notation
- **Beautiful Visualization**: Clean UI with LaTeX rendering powered by MathJax
- **Interactive Steps**: Navigate through each step to understand the process
- **Responsive Design**: Works on desktop and mobile devices

---

## Features

### Core Operation
- **Matrix Inverse** - Find inverse matrices with step-by-step process

### User Experience

- **LaTeX Rendering** - Beautiful mathematical notation
- **Step-by-Step Visualization** - See each operation performed
- **Fraction Support** - Displays results as fractions when possible
- **Row Highlighting** - Visual feedback for current operations
- **Responsive Design** - Works on all screen sizes
- **Clean Interface** - Intuitive and easy to use

### Additional Features

- **Built-in Tutorial** - Learn how to use each operation
- **Educational Explanations** - Understand the "why" behind each step
- **Dynamic Matrix Input** - Flexible matrix size configuration
- **Fast Performance** - Instant calculations and smooth animations

---

## Demo

### Matrix Inversion Example

```
Input  2x2 Matrix:
[ 4  7 ]
[ 2  6 ]

Output (Row Echelon Form):
[ 3/5  -7/10 ]
[ -1/5  2/5  ]


Input 2x2 matrix:
[ 1  1 ]
[ 1  1 ]

Output:
Error! The matrix is singular and has no inverse.
This matrix has no inverse because its determinant is zero.
Note: Step-by-step visualization is only shown for invertible matrices.
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16.0 or higher)
- **npm** (v8.0 or higher) or **yarn**

```bash
# Check your versions
node --version
npm --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rachelannec/matrix-inverter.git
cd matrix-inverter
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

### Running the App

**Development Mode:**

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

**Production Build:**

```bash
npm run build
# or
yarn build
```

**Preview Production Build:**

```bash
npm run preview
# or
yarn preview
```

---

## Usage

### Basic Workflow

1. **Configure Matrix**
   - Click the dropdown menu and select the matrix dimension ranging from 2x2 to 10x10

2. **Input Values**
   - Fill in your matrix values
   - Use fractions (e.g., 1/3) or decimals

3. **Solve**
   - Click "Clear" to remove all inputs
   - Click "Calculate Inverse" to calculate the inverse of the matrix
   - Navigate through the step-by-step solution

### Example:

1. Set matrix size to **2 rows × 2 columns** (square matrix)
2. Enter the values matrix:
   ```
   [ 1  2 ]
   [ 3  4 ]
   ```
3. Final Result after clicking "Calculate Inverse":
   [ -2      1  ]
   [  3/2  -1/2 ]

4. Click "Next" or "Previous" to navigate through the steps
    ```
    Initial Matrix - Augmented Matrix [A | I]
    Step 1: Eliminate entries in Column 1
    Step 2: Scale Row 2 to make pivot = 1
    Step 3: Eliminate entries in Column 2
    Reduced Row Echelon Form (RREF) Achieved
    Inverse Matrix Found
    ```
---

## Operations

### Matrix Inverse

Finds the inverse matrix A⁻¹ using Gauss-Jordan elimination.

**Use Cases:**
- Solving matrix equations (Ax = b)
- Linear transformations
- Cryptography applications

**Requirements:**
- Matrix must be square
- Determinant must be non-zero

**Note:** If the matrix is singular (determinant = 0), an error message will be displayed and no steps will be shown.

---

## Technologies Used

### Frontend Framework
- **React 19.2** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.2** - Build tool and dev server

### Styling
- **CSS3** - Custom styles with gradients and animations
- **Responsive Design** - Mobile-first approach

### Mathematics
- **MathJax 3** - LaTeX rendering for mathematical notation
- **Custom Algorithms** - Implemented matrix operations from scratch

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Git** - Version control

---

## Project Structure

```
matrix-inverter/
├── public/
│   └── testcases/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ExplanationTab.tsx
│   │   ├── Footer.tsx
│   │   ├── LaTeXRenderer.tsx
│   │   ├── MatrixInput.tsx
│   │   ├── Navbar.tsx
│   │   ├── SolutionDisplay.tsx
│   │   └── StepVisualization.tsx
│   ├── styles/
│   │   ├── ExplanationTab.css
│   │   ├── Footer.css
│   │   └── Navbar.css
│   ├── types/
│   │   ├── mathjax.d.ts
│   │   └── matrix.ts
│   ├── utils/
│   │   ├── mathFormatter.ts
│   │   ├── matrixOperations.ts
│   │   ├── matrixValidator.ts
│   │   └── stepGenerator.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── CHANGELOG.md
└── README.md
```

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Ideas

- Bug fixes
- New matrix operations (Gram-Schmidt Process, etc.)
- UI/UX improvements
- Documentation enhancements
- Better algorithm for existing operations

---

## License

Distributed under the **MIT License**. See `LICENSE` file for more information.

---

## Acknowledgments

- [React](https://reactjs.org/) - The amazing UI library
- [MathJax](https://www.mathjax.org/) - Beautiful mathematical notation
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better DX

---

<div align="center">
   Final Requirement for MATH 206 👾
</div>
