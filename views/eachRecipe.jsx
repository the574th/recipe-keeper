var React = require('react');
var DefaultLayout = require('./layouts/default');

class eachRecipe extends React.Component {

    render() {
         var recipeName = this.props.name;
         var imgLink = this.props.img;
         var ingredients = this.props.ingredients;
         var instructions = this.props.instructions;

        return (
            <DefaultLayout title='Home'>
                <div className="indieRecipe">
                    <section>
                        <h2>{recipeName}</h2>
                        <h3>Directions</h3>
                            <p>{instructions}</p>
                        <h3>Ingredients</h3>
                            <p>{ingredients}</p>
                    </section>
                    <img className="recipePhoto" src={imgLink}/>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = eachRecipe;