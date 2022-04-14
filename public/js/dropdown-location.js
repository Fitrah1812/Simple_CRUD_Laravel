$("#provinsi").on("change", function(e, data) {
    var idProv = $(this).val();
    var baseUrl = '/daerah/kotakab/' + idProv;
    var kota = [];
    removeOptions(document.getElementById("kota-kab"));
    $.ajax({
        url: baseUrl,
        dataType: 'json',
        success: function(datas) {
            var kota = $.map(datas, function(obj) {
                obj.id = obj.id;
                obj.text = obj.nama;
                return obj;
            });
            $("#kota-kab").select2({
                placeholder: "Pilih Kota",
                data: kota
            });
            var $nullOption = $("<option selected></option>").val(null).text("Pilih Kota/Kabupaten"); 
            $("#kota-kab").append($nullOption).trigger('change');
            if(data)
                $("#kota-kab").val(data.kota).trigger('change', [{kecamatan: data.kecamatan}]);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$("#kota-kab").on("change", function(e, data) {
    var idKota = $(this).val();
    var baseUrl = '/daerah/kecamatan/' + idKota;
    var kec = [];
    removeOptions(document.getElementById("kecamatan"));
    $.ajax({
        url: baseUrl,
        dataType: 'json',
        success: function(datas) {
            var kec = $.map(datas, function(obj) {
                obj.id = obj.id
                obj.text = obj.nama
                return obj;
            });
            $("#kecamatan").select2({
                placeholder: "Pilih Kecamatan",
                data: kec
            });
            var $nullOption = $("<option selected></option>").val(null).text("Pilih Kecamatan"); 
            $("#kecamatan").append($nullOption).trigger('change');
            if(data)
                $("#kecamatan").val(data.kecamatan).trigger('change');
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

function removeOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}