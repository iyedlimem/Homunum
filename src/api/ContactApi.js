const submitNewsletter = async (data ) => {
    try {
        const response = await fetch('https://nlinedata-cms.onrender.com/api/newsletter-mails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        });

        if (response.ok) {
            console.log('Newsletter form submitted successfully');
            return true;
        } else {
            console.error('Failed to submit newsletter form');
            return false;
        }
    } catch (error) {
        console.error('Error submitting newsletter form:', error);
        return false;
    }
};

export default submitNewsletter;