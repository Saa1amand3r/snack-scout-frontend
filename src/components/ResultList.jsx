import ResultCard from "./ResultCard";

const ResultList = ({results}) => {
    return (
        <div className="w-full max-w-2xl space-y-4">
            {results.map((store, index) => (
                <ResultCard key={index} info={store}/>
            ))}
        </div>
    );
}

export default ResultList;