import React, { useEffect, useState } from 'react';
import { fetchTermsAndConditions } from '../../api/terms';

const TermsAndConditions: React.FC = () => {
    const [terms, setTerms] = useState<string>('');

    useEffect(() => {
        const loadTerms = async () => {
            try {
                const content = await fetchTermsAndConditions();
                setTerms(content);
            } catch (error) {
                console.error(error);
            }
        };

        loadTerms();
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: terms }} />;
};

export default TermsAndConditions;
