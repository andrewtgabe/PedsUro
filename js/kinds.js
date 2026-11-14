// Treatment option order (least to most involved) and tags shown on each option button.
// n = no surgery, s = surgery, '' = information only (no tag).
export const KINDS = {
  bbd: { schedule: 'n', constipation: 'n', biofeedback: 'n', medicine: 'n' },
  bowel: { cleanout: 'n', seattle: '', maintenance: 'n', routine: 'n', goal: '' },
  buried: { watch: 'n', penoplasty: 's', scrotoplasty: 's' },
  cryptorchidism: { wait: 'n', orchiopexy: 's', fsOne: 's', fsTwo: 's', retractile: '' },
  duplex: { ultrasound: '', vcug: '', scan: '', antibiotic: 'n', none: 'n', puncture: 's', joining: 's', reimplant: 's', removal: 's' },
  enuresis: { habits: 'n', alarm: 'n', desmopressin: 'n' },
  exstrophy: { newborn: '', staged: 's', cpre: 's', kelly: 's', bones: 's', epispadias: 's', continence: '' },
  hernia: { reduce: 'n', open: 's', laparoscopic: 's' },
  hydrocele: { watch: 'n', surgery: 's' },
  hydronephrosis: { watch: 'n', scan: '', vcug: '', antibiotic: 'n', surgery: 's' },
  hypospadias: { watch: 'n', repair: 's', staged: 's', complications: '' },
  labial: { watch: 'n', estrogen: 'n', separation: 's', aftercare: '' },
  meatal: { meatotomy: 's', aftercare: '' },
  neurogenic: { cic: 'n', medicine: 'n', botox: 's', augment: 's', channel: 's' },
  phimosis: { care: 'n', steroid: 'n', preputioplasty: 's', circumcision: 's', reduction: 's' },
  puv: { catheter: 's', ablation: 's', vesicostomy: 's', bladder: '', kidney: '' },
  stones: { imaging: '', analysis: '', metabolic: '', pass: 'n', drain: 's', ureteroscopy: 's', swl: 's', pcnl: 's', bladderRemoval: 's', prevention: '' },
  testismass: { partial: 's', radical: 's', after: '' },
  // Torsion keeps emergency surgery first: it is the standard treatment.
  torsion: { surgery: 's', manual: 's', removal: 's' },
  upj: { ultrasound: '', scan: '', watch: 'n', drain: 's', pyeloplasty: 's' },
  uti: { testing: '', antibiotics: '', imaging: '', antibioticPrev: '', prevention: '' },
  uvj: { ultrasound: '', vcug: '', scan: '', watch: 'n', antibiotic: 'n', balloon: 's', ureterostomy: 's', reimplant: 's' },
  varicocele: { watch: 'n', embolization: 's', surgery: 's' },
  vur: { ultrasound: '', vcug: '', cevus: '', dmsa: '', habits: 'n', observation: 'n', antibiotic: 'n', injection: 's', reimplant: 's' },
};
