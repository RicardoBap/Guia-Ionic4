import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente-alert',
  templateUrl: './componente-alert.page.html',
  styleUrls: ['./componente-alert.page.scss'],
})
export class ComponenteAlertPage implements OnInit {

  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async abrirAlertSimples() {
    let alertSimples = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader: 'Subheader',
      message: 'Essa é a menssagem do alert simples',
      buttons: ['OK']
    })
    await alertSimples.present()
  }

  async abrirAlertMultiplosBotoes() {
    let alertMultiplo = await this.alertCtrl.create({
      header: 'Alert Multiplo',
      message: 'Essa é a menssagem do alert com multiplos botões',
      buttons: ['Cancelar', 'Abrir Modal', 'Excluir'],
    })
    await alertMultiplo.present()
  }

  async abrirAlertConfirmacao() {
    let alertConfirmacao = await this.alertCtrl.create({
      header: 'Confirmação',
      message: 'Deseja cancelar o pedido <b>XPTO</b>',
      buttons: [{
        text: 'cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Pedido cancelado: XPTO')
        }
      },
      {
        text: 'Pagar',
        handler: () => {
          console.log('Pago com sucesso!')
        }
      }],
    })
    await alertConfirmacao.present()
  }

  async abrirPrompet() {
    let prompet = await this.alertCtrl.create({
      header: 'Acesso Restrito',
      inputs: [
        {
          name: 'login',
          type: 'text',
          placeholder: 'Informe seu login'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha'
        }
      ],
      buttons: [
        {
          text: 'Novo usuário',
          cssClass: 'secondary',
          role: 'cancel',
          handler: () => {
            console.log('Aqui vai abrir a tela de cadastro de novos usuários')
          }
        },
        {
          text: 'Entrar',
          handler: (response) => {
            console.log('Seja bem-vindo fulano de tal', response)
          }
        }
      ]
    })
    await prompet.present()
  }

  async abrirRadio() {
    const alertRadio = await this.alertCtrl.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'radio1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'radio2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'radio3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'radio4'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmar cancelamento')
          }
        },
        {
          text: 'OK',
          handler: (response) => {
            console.log('Confirm ok', response)
          }
        }
      ]
    })
    await alertRadio.present()  
  }


  async abrirCheckbox() {
    const alertCheckbox = await this.alertCtrl.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'checkbox1',
          checked: true
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'checkbox2'
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'checkbox3'
        },
        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'checkbox4'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmar cancelamento')
          }
        },
        {
          text: 'OK',
          handler: (response) => {
            console.log('Confirm ok', response)
          }
        }
      ]
    })
    await alertCheckbox.present()  
  }

}
