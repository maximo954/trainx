from .api.views import ClientViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api/clients', ClientViewSet, basename='clients')
urlpatterns = router.urls
