


const Card = (props: { champ: IChamps }) => {
    const champ: IChamps = props.champ;

    return (
        <div className="card column is-2 is-full-mobile">
            <div className="card-image">

                <figure className="image" >
                    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kalista_2.jpg" alt="Placeholder image" />
                    <div>
                        <figure>
                            <img src="https://img.informer.com/icons/png/128/6219/6219289.png" />
                        </figure>

                        <p>NB Points</p>
                        <progress className="progress is-info" value="45" max="100" data-label="4500/10000">45%</progress>




                    </div>
                </figure>
            </div >
            <footer className="card-footer">
                <p>{champ.championId}</p>
            </footer >

        </div >
    );
}


export default Card