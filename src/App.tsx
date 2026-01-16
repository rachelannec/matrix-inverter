import { useState } from 'react';
import Navbar from './components/Navbar';
import MatrixInput from './components/MatrixInput';
import StepVisualization from './components/StepVisualization';
import SolutionDisplay from './components/SolutionDisplay';
import { validateMatrix, isSquareMatrix } from './utils/matrixValidator';
import { calculateInverse } from './utils/matrixOperations';
import type { Step, SolutionResult } from './types/matrix';
import './App.css';

function App() {
    const [steps, setSteps] = useState<Step[]>([]);
    const [solution, setSolution] = useState<SolutionResult | null>(null);
    const [currentTab, setCurrentTab] = useState<string>('solver');

    const handleMatrixInput = (inputMatrix: number[][]) => {
        if (!validateMatrix(inputMatrix)) {
            alert('Invalid matrix input. Please check the format.');
            return;
        }

        if (!isSquareMatrix(inputMatrix)) {
            alert('Matrix inversion requires a square matrix.');
            return;
        }

        // Calculate inverse
        const result = calculateInverse(inputMatrix);
        
        setSteps(result.steps);
        setSolution(result.result);
    };

    return (
        <div className="App">
            <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />
            
            <div className="container">
                {currentTab === 'solver' && (
                    <>
                        <h1>Matrix Inverse Calculator</h1>
                        <p style={{ textAlign: 'center', color: '#ddd', marginBottom: '30px' }}>
                            Calculate the inverse of a square matrix using Gauss-Jordan elimination
                        </p>
                        <MatrixInput onMatrixInput={handleMatrixInput} />
                        {steps.length > 0 && <StepVisualization steps={steps} />}
                        {solution && <SolutionDisplay solution={solution} />}
                    </>
                )}

                {currentTab === 'about' && (
                    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                        <h1>About Matrix Inverse Calculator</h1>
                        <p style={{ maxWidth: '700px', margin: '20px auto', lineHeight: '1.8', fontSize: '18px' }}>
                            Matrix Inverse Calculator is an educational tool designed to help students 
                            understand matrix inversion through interactive visualization and 
                            step-by-step solutions using the Gauss-Jordan elimination method.
                        </p>
                        <div style={{ maxWidth: '700px', margin: '30px auto', textAlign: 'left' }}>
                            <h3 style={{ color: '#a2624b' }}>Features:</h3>
                            <ul style={{ lineHeight: '1.8', fontSize: '16px' }}>
                                <li>Calculate inverse of square matrices (2×2 up to 10×10)</li>
                                <li>Step-by-step visualization of Gauss-Jordan elimination</li>
                                <li>Detects singular (non-invertible) matrices</li>
                                <li>Shows augmented matrix [A | I] transformation</li>
                            </ul>
                        </div>
                        <p style={{ marginTop: '30px', color: '#a2624b', fontSize: '20px', fontWeight: 'bold' }}>
                            Version 1.0.0
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default App;

// for number formatting
// npm install mathjax-full
// npm install @types/mathjax-full --save-dev