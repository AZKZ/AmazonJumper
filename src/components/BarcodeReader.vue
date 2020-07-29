<template>
  <div id='barcodeReader'>
    <video id='video' width='300' height='200' style='border: 1px solid gray'></video>
    <p>{{barcodeText}}</p>
  </div>
</template>

<script>
import { BrowserBarcodeReader } from '@zxing/library'

export default {
  name: 'BarcodeReader',
  props: {
    deviceId: String,
    codeReader: BrowserBarcodeReader,
    barcodeText: String
  },
  created: function () {
    // バーコード読み込みに必要な情報の初期化
    this.codeReader = new BrowserBarcodeReader()
    this.codeReader.getVideoInputDevices().then((videoInputDevice) => {
      this.selectedDeviceId = videoInputDevice[0].deviceId
    })
  },
  mounted: async function () {
    this.barcodeText = ''

    while (true) {
      const result = await this.codeReader.decodeFromInputVideoDevice(
        this.selectedDeviceId,
        'video'
      )
      this.barcodeText = result
      // ISBNコードの場合はAmazon検索結果へジャンプする
      if (result.text.substr(0, 2) === '97') {
        window.location.href = 'https://www.amazon.co.jp/s?k=' + result.text
        break
      }
    }
    await this.codeReader.reset()
  }
}
</script>

<style>
#barcodeReader {
  text-align: center;
}
</style>
