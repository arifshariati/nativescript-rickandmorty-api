const createViewModel = require("./page2-view-model").createViewModel;

function onNavigatingPage2(args) {
    const page = args.object;

    const navigationContext = page.navigationContext;

    page.bindingContext = createViewModel(navigationContext);
}

function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}

exports.onTap = onTap;
exports.onNavigatingPage2 = onNavigatingPage2;
