export async function getPuppies() {
    try {
        const response = await fetch('http://localhost:8000/api/puppies');
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }
        const {data} = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}