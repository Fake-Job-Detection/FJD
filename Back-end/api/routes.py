from api.CompanySignInSignUp import CompanySigninSignUp
from api.cvUpload import cvUpload
from api.postJobAd import postJobAd


def initialize_routes(app):
    app.register_blueprint(CompanySigninSignUp)
    app.register_blueprint(cvUpload)
    app.register_blueprint(postJobAd)
