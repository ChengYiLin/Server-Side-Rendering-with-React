const fetchAPI = () => {
    return new Promise<{ name: string; job: string }>((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Martin Lin',
                job: 'Software Engineer',
            });
        }, 100);
    });
};

export default fetchAPI;
