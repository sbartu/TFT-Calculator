from django.views import generic


class IndexView(generic.TemplateView):
    template_name = 'teamcalculator/index.html'
    
    def get_queryset(self):
        return