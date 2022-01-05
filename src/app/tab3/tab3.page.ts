import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/iFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
      sinopse: `Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói.
      Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos,
      e o forçam a descobrir o que realmente significa ser o Homem-Aranha.`,
      pagina: '/spiderman-no-way-home'
    },
    {
      nome: 'Resident Evil: Bem-Vindo a Raccoon City (2021)',
      lancamento: '02/12/2021 (BR)',
      duracao: '1h 47m',
      avaliacao: 61,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eStYYbyaxyDMzHVkGrmkiSrMi0h.jpg',
      generos: ['Terror', 'Ação', 'Ficção científica'],
      sinopse: `O que já foi um dia a casa da gigante farmacêutica em expansão Umbrella Corporation,
      Raccoon City, é agora uma cidade agonizante do meio-oeste.
      O êxodo da empresa transformou a cidade em um deserto, com um grande mal fermentando escondido abaixo da superfície.
      Quando esse mal é libertado, um grupo de sobreviventes deve trabalhar juntos para descobrir a
      verdade por trás da Umbrella enquanto buscam viver por mais uma noite.`,
      pagina: '/resident-evil-raccoon-city'
    },
    {
      nome: 'Matrix Resurrections (2021)',
      lancamento: '22/12/2021 (BR)',
      duracao: '2h 28m',
      avaliacao: 71,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
      generos: ['Ação', 'Ficção científica'],
      sinopse: `Em um mundo de duas realidades — a vida cotidiana e o que está por trás dela —,
      Thomas Anderson terá que escolher seguir o coelho branco mais uma vez.
      A escolha, embora seja uma ilusão, ainda é a única maneira de entrar ou sair da Matrix,
      que é mais forte, mais segura e mais perigosa do que nunca.`,
      pagina: '/matrix-resurrections'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }


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
