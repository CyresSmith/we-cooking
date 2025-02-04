import { Button } from '@ui/button';

const NotFound = () => {
    return (
        <div className="flex h-screen w-screen flex-col content-center justify-center text-center">
            <h2 className="text-xxl text-destructive">Not found</h2>

            <p className="mt-6 text-xl">Requested recourse not found</p>

            <Button asChild className="mx-auto mt-6">
                Return to home page
            </Button>
        </div>
    );
};

export default NotFound;
