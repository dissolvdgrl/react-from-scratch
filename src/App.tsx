import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {ShortList} from "./components/ShortList";
import {PuppiesList} from "./components/PuppiesList";
import {NewPuppyForm} from "./components/NewPuppyForm";
import {Suspense, use, useState} from "react";
import {Puppy} from "./types";
import {LikedContext} from "./context/liked-context";
import {LoaderCircle} from "lucide-react";
import {ErrorBoundary} from "react-error-boundary";
import {getPuppies} from "./queries";

export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header/>
                <ErrorBoundary fallbackRender={({error}) => (
                    <div className="bg-red-100 p-6 shadow ring ring-black/5 mt-12">
                        <p className="text-red-500">{error.message}: {error.details}</p>
                    </div>
                )}>
                    <Suspense fallback={
                        <div className="bg-red-100 p-6 shadow ring ring-black/5 mt-12">
                            <LoaderCircle className="animate-spin stroke-slate-300"/>
                        </div>
                    }>
                        <Main/>
                    </Suspense>
                </ErrorBoundary>
            </Container>
        </PageWrapper>
    );
}

const puppyPromise = getPuppies();

function Main() {
    const apiPuppies = use(puppyPromise);
    const [liked, setLiked] = useState<Puppy['id'][]>([1, 3]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [puppies, setPuppies] = useState<Puppy[]>(apiPuppies);

    return (
        <main>
            <LikedContext value={{liked, setLiked}}>
                <div className="mt-24 grid gap-8 sm:grid-cols-2">
                    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    <ShortList puppies={puppies}/>
                </div>
                <PuppiesList searchQuery={searchQuery} puppies={puppies}/>
            </LikedContext>
            <NewPuppyForm puppies={puppies} setPuppies={setPuppies}/>
        </main>
    );
}