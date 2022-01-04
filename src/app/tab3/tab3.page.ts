import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
