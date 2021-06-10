import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { Storage } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class CreateOshaberiService {

  constructor(
    private api: APIService,
  ) { }

  async uploadOshaberi(content: string, imageKeys: Array<string>, parentOshaberiId?: string) {
    await this.api.CreateOshaberiAndTimeline(content, imageKeys, parentOshaberiId);
    return;
  }

  async uploadImages(images, imageAuthLevel): Promise<Array<string>> {
    const uploadImages = images.map(image => this.uploadSingleImage(image.get('key').value, image.get('fileObj').value, imageAuthLevel));
    return await Promise.all(uploadImages);
  }

  async uploadSingleImage(key: string, fileObj: File, level: string): Promise<string> {
    await Storage.put(key, fileObj, {
      level: level,
    });
    return key;
  }
}
