export const saveTermsAndConditions = async (content: string): Promise<void> => {
    const response = await fetch('http://localhost:3000/api/terms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
    });

    if (!response.ok) {
        throw new Error('Failed to save terms and conditions');
    }
};

export const fetchTermsAndConditions = async (): Promise<string> => {
    const response = await fetch('http://localhost:3000/api/terms');
    if (!response.ok) {
        throw new Error('Failed to fetch terms and conditions');
    }
    const data = await response.json();
    return data.content;
};
