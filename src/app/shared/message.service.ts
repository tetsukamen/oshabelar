import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastController: ToastController,
  ) { }

  async indicateWarning(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      color: "danger",
      duration: 2000
    });
    toast.present();
  }

  async indicateSuccess(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      color: "primary",
      duration: 2000
    });
    toast.present();
  }
}
