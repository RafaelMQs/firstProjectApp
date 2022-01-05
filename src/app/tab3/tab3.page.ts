import { IFilme } from '../models/iFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  titulo = 'Top Filmes';

  listaFilmes: IFilme[] = [
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa (2021)',
      lancamento: '16/12/2021 (BR)',
      duracao: '2h 28m',
      avaliacao: 84,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/spiderman-no-way-home'
    },
    {
      nome: 'Resident Evil: Bem-Vindo a Raccoon City (2021)',
      lancamento: '02/12/2021 (BR)',
      duracao: '1h 47m',
      avaliacao: 61,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eStYYbyaxyDMzHVkGrmkiSrMi0h.jpg',
      generos: ['Terror', 'Ação', 'Ficção científica'],
      pagina: '/resident-evil-raccoon-city'
    },
    {
      nome: 'Matrix Resurrections (2021)',
      lancamento: '22/12/2021 (BR)',
      duracao: '2h 28m',
      avaliacao: 71,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
      generos: ['Ação', 'Ficção científica'],
      pagina: '/matrix-resurrections'
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

   async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja favoritar este filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Favoritar',
          id: 'confirm-button',
          handler: () => {
            this.apresentarAviso();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarAviso() {
    const toast = await this.toastController.create({
      message: 'Filme favoritado com sucesso!',
      duration: 2000,
      color: 'dark',
      animated: true
    });
    toast.present();
  }

}
