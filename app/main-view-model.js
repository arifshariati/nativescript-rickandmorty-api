const httpModule = require("tns-core-modules/http");
const Observable = require("@nativescript/core").Observable;

function getApiData(url) {
    var dummy = [];

    httpModule.getJSON(url).then(
        (response) => {
            this.dummy = response;
        },
        (error) => {
            alert(error);
        }
    );
    return this.dummy;
}

function createViewModel() {
    const viewModel = new Observable();

    viewModel.url = "https://rickandmortyapi.com/api/episode/8";

    viewModel.onTap = () => {
        var api_response = getApiData(viewModel.url);

        if (api_response !== undefined) {
            viewModel.set("episode", "Episode : " + api_response.episode);

            viewModel.set("name", "Name : " + api_response.name);

            viewModel.set("air_date", "On Air Date : " + api_response.air_date);

            viewModel.set("characters", api_response.characters);
            viewModel.set("list", "Characters List with their link");
        }
    };

    viewModel.listItemClicked = (args) => {
        var navData = {
            moduleName: "page2",
            context: {
                character: viewModel.characters[args.index],
            },
        };

        args.object.page.frame.navigate(navData);
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
