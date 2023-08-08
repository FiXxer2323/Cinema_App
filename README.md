# Cinema_App

## MOZIK
- ID
- neve,
- cím, 

## TERMEK 
- ID,
- neve, 
- mozi ID,
- sorok száma,
- soronkénti székek száma,
- (egyedi séma székek elrendezése) 

## FILMEK 
- ID,
- film cím,
- film adatok,
- Terem id, 

## ÍDŐPONT
- ID,
- film ID
- Terem ID
- időpont, 

## NÉZŐ
- ID,
- neve,
- email cím,
- tel szám, 

## KOROSZTÁLY
- ID,
- megnevezés , 

## ÁRKATEGÓRIA
- ID,
- megnevezés,
- (3D, Premier, 2D, Matiné)

## KOROSZTÁLY ÁR
- ID,
- KOROSZTÁLY ID,
- ÁRKATEGORIA ID,
- ár, 

## FOGLALÁS/VÁSÁRLÁS
- ID,
- néző id,
- időpont ID,
- (foglalt helyek), 
- (fizetési mód),
- Fizetve = 0 | 1,
- Korosztály ár ID-k[[1,1]]
