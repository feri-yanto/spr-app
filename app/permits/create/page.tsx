import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PermitsCreate() {
  return (
    <div>
      <h1 className="text-xl font-bold">Form Izin Pegawai</h1>
      <div className="px-5 py-4 mt-5 rounded-xl bg-card border">
        <FieldSet>
          <FieldLegend className="mb-2">Data Diri</FieldLegend>
          <FieldDescription>Pastikan data diri anda sudah sesuai</FieldDescription>
          <hr />
          <FieldGroup className="grid grid-cols-12 auto-rows-min gap-4">
            <Field className="col-span-12 gap-2 md:col-span-6">
              <FieldLabel htmlFor="id_fullname">Nama Lengkap</FieldLabel>
              <Input id="id_fullname" autoFocus placeholder="Agus Jayadi" />
            </Field>
            <Field className="col-span-12 gap-2 md:col-span-6">
              <FieldLabel htmlFor="id_nip">NIP</FieldLabel>
              <Input type="number" id="id_nip" placeholder="2000*******" />
            </Field>
            <Field className="col-span-12 gap-2 md:col-span-6">
              <FieldLabel htmlFor="id_position">Jabatan</FieldLabel>
              <Input id="id_position" placeholder="Analis SDM Aparatur" />
            </Field>
            <Field className="col-span-12 gap-2 md:col-span-6">
              <FieldLabel>Golongan</FieldLabel>
              <Select>
                <SelectTrigger className="data-popup-open:border-ring data-popup-open:ring-3 data-popup-open:ring-ring/20">
                  <SelectValue placeholder="Pilih golongan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Golongan PNS</SelectLabel>
                    <SelectItem value="III/a">Penata Muda III/a</SelectItem>
                    <SelectItem value="III/b">Penata Muda Tingkat I III/a</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Golongan PPPK</SelectLabel>
                    <SelectItem value="IV">Golongan IV</SelectItem>
                    <SelectItem value="V">Golongan V</SelectItem>
                    <SelectItem value="X">Golongan X</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  );
}