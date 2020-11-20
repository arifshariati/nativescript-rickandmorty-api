const httpModule = require("tns-core-modules/http");
const Observable = require("@nativescript/core").Observable;

function getCharacterData(url) {
    var characterData = {};

    httpModule.getJSON(url).then(
        (response) => {
            this.characterData = {
                name: response.name,
                status: response.status,
                species: response.species,
                gender: response.gender,
                image: response.image,
            };
        },
        (error) => {
            alert(error);
        }
    );
    return this.characterData;
}

function createViewModel(navigationContext) {
    const viewModel = new Observable();

    var characterDetails = {};

    const characterNumber = navigationContext.character.split("/").pop();

    viewModel.pageTitle = `Character details for Character # ${characterNumber}`;

    characterDetails = getCharacterData(navigationContext.character);

    if (characterDetails !== undefined) {
        viewModel.set("name", "Name : " + characterDetails.name);

        viewModel.set("status", "Status : " + characterDetails.status);

        viewModel.set("species", "Species : " + characterDetails.species);

        viewModel.set("gener", "Gender : " + characterDetails.gener);

        viewModel.set("image", characterDetails.image);
    }

    return viewModel;
}

exports.createViewModel = createViewModel;
