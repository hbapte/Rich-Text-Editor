import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { saveTermsAndConditions } from '../../api/terms';

const RichTextEditor: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (content: string) => {
        setValue(content);
    };

    const handleSave = async () => {
        try {
            await saveTermsAndConditions(value);
            alert('Terms and conditions saved successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to save terms and conditions');
        }
    };

    return (
        <div>
            <ReactQuill value={value} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default RichTextEditor;
