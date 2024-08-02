import FilhoFunction from "./FilhoFunction"

const PaiFunction = () => {
   const handleClidClick = () => {
        console.log("Cliclou no elemento pai atraves do filho");
    };

  return (
    <div>
      <FilhoFunction onClickChild={handleClidClick} />
    </div>
  );
};

export default PaiFunction
