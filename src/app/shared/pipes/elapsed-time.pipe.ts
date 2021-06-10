import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(value: number): string {
    const timestammp = value * 1000;
    const now = Date.now();
    const elapsedMiliSecond = now - timestammp;
    if (elapsedMiliSecond < 60000) { // 過去1分以内なら秒表示
      return `${Math.floor(elapsedMiliSecond / 1000)}秒`;
    } else if (elapsedMiliSecond < 3600000) {// 過去1時間以内なら分表示
      return `${Math.floor(elapsedMiliSecond / 60000)}分`;
    } else if (elapsedMiliSecond < 86400000) {// 過去1日以内なら時間表示
      return `${Math.floor(elapsedMiliSecond / 3600000)}時間`;
    } else if (elapsedMiliSecond < 345600000) {// 過去4日以内なら日表示
      return `${Math.floor(elapsedMiliSecond / 86400000)}日`;
    } else {// それより前は日付表示
      const date = new Date(timestammp);
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    }
  }

}
