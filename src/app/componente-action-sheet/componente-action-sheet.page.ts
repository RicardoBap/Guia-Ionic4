import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-componente-action-sheet',
  templateUrl: './componente-action-sheet.page.html',
  styleUrls: ['./componente-action-sheet.page.scss'],
})
export class ComponenteActionSheetPage implements OnInit {

  constructor(
    private actioSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async abrirActionSheet() {
    let actionSheet = await this.actioSheetCtrl.create({
      header: 'Albuns',
      buttons: [ 
        { 
          text: 'excluir',
          role: 'desctrutive',
          icon: 'trash',
          handler: () => {
            console.log('excluir')
          }
        },
        { 
          text: 'compartilhar',
          role: 'share',
          icon: 'share-social',
          handler: () => {
            console.log('compartilhar')
          }
        },
        { 
          text: 'assistir',
          icon: 'arrow-forward-circle',
          handler: () => {
            alert('assitir')
          }
        },
        { 
          text: 'cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('cancelar')
          }
        }
      ]
    })
    await actionSheet.present()    
  }

}
