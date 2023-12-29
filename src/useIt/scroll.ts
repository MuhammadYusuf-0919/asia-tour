export const scrollToElement = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };