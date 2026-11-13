// Treatment option order (least to most involved) and tags shown on each option button.
// n = no surgery, p = procedure, s = surgery, '' = information only (no tag).
export const KINDS = {
  bbd: { schedule: 'n', constipation: 'n', biofeedback: 'n', medicine: 'n' },
  bowel: { cleanout: 'n', seattle: '', maintenance: 'n', routine: 'n', goal: '' },
  buried: { watch: 'n', penoplasty: 's', scrotoplasty: 's' },
  cryptorchidism: { wait: 'n', orchiopexy: 's', fsOne: 's', fsTwo: 's', retractile: '' },
  duplex: { ultrasound: '', vcug: '', scan: '', antibiotic: 'n', none: 'n', puncture: 'p', joining: 's', reimplant: 's', removal: 's' },
  enuresis: { habits: 'n', alarm: 'n', desmopressin: 'n' },
  exstrophy: { newborn: '', staged: 's', cpre: 's', kelly: 's', bones: 's', epispadias: 's', continence: '' },
  hernia: { reduce: 'n', open: 's', laparoscopic: 's' },
  hydrocele: { watch: 'n', surgery: 's' },
  hydronephrosis: { watch: 'n', scan: '', vcug: '', antibiotic: 'n', surgery: 's' },
  hypospadias: { watch: 'n', repair: 's', staged: 's', complications: '' },
  labial: { watch: 'n', estrogen: 'n', separation: 'p', aftercare: '' },
  meatal: { meatotomy: 'p', aftercare: '' },
  neurogenic: { cic: 'n', medicine: 'n', botox: 'p', augment: 's', channel: 's' },
  phimosis: { care: 'n', steroid: 'n', preputioplasty: 's', circumcision: 's', reduction: 'p' },
  puv: { catheter: 'p', ablation: 'p', vesicostomy: 's', bladder: '', kidney: '' },
  stones: { pass: 'n', swl: 'p', ureteroscopy: 'p', bladderRemoval: 'p', pcnl: 's', prevention: '' },
  testismass: { partial: 's', radical: 's', after: '' },
  // Torsion keeps emergency surgery first: it is the standard treatment.
  torsion: { surgery: 's', manual: 'p', removal: 's' },
  upj: { ultrasound: '', scan: '', watch: 'n', drain: 'p', pyeloplasty: 's' },
  uti: { testing: '', antibiotics: 'n', imaging: '', prevention: 'n' },
  uvj: { ultrasound: '', vcug: '', scan: '', watch: 'n', antibiotic: 'n', balloon: 'p', ureterostomy: 's', reimplant: 's' },
  varicocele: { watch: 'n', embolization: 'p', surgery: 's' },
  vur: { ultrasound: '', vcug: '', cevus: '', dmsa: '', habits: 'n', observation: 'n', antibiotic: 'n', injection: 's', reimplant: 's' },
};
