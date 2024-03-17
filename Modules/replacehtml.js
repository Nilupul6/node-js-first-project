module.exports = function replacehtml(template,prod){
    let output = template.replace('{{%IMAGE%}}',prod.productImage);
    output = output.replace('{{%NAME%}}',prod.name);
    output = output.replace('{{%MODEL%}}',prod.modeName);
    output = output.replace('{{%MODELNO%}}',prod.modelNumber);
    output = output.replace('{{%SIZE%}}',prod.size);
    output = output.replace('{{%CAMERA%}}',prod.camera);
    output = output.replace('{{%PRICE%}}',prod.price);
    output = output.replace('{{%ID%}}',prod.id);
    output = output.replace('{{%COLOR%}}',prod.color);
    output = output.replace('{{%ROM%}}',prod.ROM);
    output = output.replace('{{%DESC%}}',prod.Description);

    return output;
}