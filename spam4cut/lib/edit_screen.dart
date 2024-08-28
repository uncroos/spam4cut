import 'dart:typed_data';
import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:image/image.dart' as img;
import 'package:path_provider/path_provider.dart';
import 'dart:io';

import 'package:spam4cut/result_screen.dart';

class EditScreen extends StatelessWidget {
  final List<XFile> images;

  const EditScreen({Key? key, required this.images}) : super(key: key);

  Future<Uint8List> mergeImages(List<XFile> images) async {
    final List<img.Image> decodedImages = [];
    for (var image in images) {
      decodedImages.add(img.decodeImage(await image.readAsBytes())!);
    }

    final image1 = decodedImages[0];
    final image2 = decodedImages[1];
    final image3 = decodedImages[2];
    final image4 = decodedImages[3];

    // 이미지 크기를 지정하여 병합할 새로운 이미지를 생성
    final mergedImage =
        img.Image(width: image1.width * 2, height: image1.height * 2);

    // 각 이미지를 병합된 이미지에 그리기
    img.compositeImage(mergedImage, image1, dstX: 0, dstY: 0);
    img.compositeImage(mergedImage, image2, dstX: image1.width, dstY: 0);
    img.compositeImage(mergedImage, image3, dstX: 0, dstY: image1.height);
    img.compositeImage(mergedImage, image4,
        dstX: image1.width, dstY: image1.height);

    // 병합된 이미지를 JPG로 인코딩하여 반환
    return Uint8List.fromList(img.encodeJpg(mergedImage));
  }

  Future<String> saveImage(Uint8List bytes) async {
    final directory = await getApplicationDocumentsDirectory();
    final imagePath = '${directory.path}/merged_image.jpg';
    final imageFile = File(imagePath);
    await imageFile.writeAsBytes(bytes);
    return imagePath;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Edit Photos')),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            final mergedImage = await mergeImages(images);
            final imagePath = await saveImage(mergedImage);
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => ResultScreen(imagePath: imagePath),
              ),
            );
          },
          child: const Text('Merge and Proceed'),
        ),
      ),
    );
  }
}
