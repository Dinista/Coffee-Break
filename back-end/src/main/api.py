from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_jwt.authentication import JWTAuth
from ninja_extra import NinjaExtraAPI
from waitlists.api import router as waitlistRouter
from accounts.api import router as accountRouter

api = NinjaExtraAPI()


api.add_router("/accounts/", accountRouter)
api.add_router("/waitlists/", waitlistRouter, auth=JWTAuth())

