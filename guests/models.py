from django.db import models


class GuestModel(models.Model):
    """Моделька гостей

    Args:
        models (_type_): _description_
    """

    name = models.TextField(verbose_name='ФИО гостя')


    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Гость'
        verbose_name_plural = 'Гости'

