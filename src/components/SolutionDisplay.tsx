import React from 'react';
import type { SolutionResult } from '../types/matrix';
import { matrixToLatex } from '../utils/mathFormatter';

interface SolutionDisplayProps {
    solution: SolutionResult;
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({ solution }) => {
    // Handle error case (singular matrix or other errors)
    if (solution.error) {
        return (
            <div className="solution-display" style={{ textAlign: 'center', padding: '40px' }}>
                <h2 style={{ color: '#ff6b6b', marginBottom: '20px' }}>⚠️ Error</h2>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff6b6b' }}>
                    {solution.error}
                </p>
                <p style={{ marginTop: '20px', color: '#ddd' }}>
                    {solution.error === 'The matrix is singular' 
                        ? 'This matrix has no inverse because its determinant is zero.'
                        : 'Please check your input and try again.'}
                </p>
            </div>
        );
    }

    // Handle success case (matrix has inverse)
    if (!solution.finalMatrix) {
        return null; // Don't render anything if no matrix
    }

    return (
        <div className="solution-display">
            <h2>✅ Final Result - Inverse Matrix</h2>
            <div 
                className="matrix-display"
                dangerouslySetInnerHTML={{ __html: matrixToLatex(solution.finalMatrix) }}
            />
        </div>
    );
};

export default SolutionDisplay;