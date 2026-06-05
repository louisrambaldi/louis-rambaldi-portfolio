#!/bin/bash
# ───────────────────────────────────────────────────────────────
#  Portfolio Louis Rambaldi — lanceur local
#  Double-clique ce fichier : il sert le site en http://localhost
#  pour que les vidéos YouTube / Vimeo se lisent et s'autoplay
#  correctement. (Le mode fichier:// bloque l'intégration vidéo.)
# ───────────────────────────────────────────────────────────────
cd "$(dirname "$0")" || exit 1
PORT=8787
echo "Portfolio Louis Rambaldi — démarrage du serveur local…"
python3 -m http.server "$PORT" >/dev/null 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null' EXIT
sleep 1
open "http://localhost:$PORT/index.html"
echo ""
echo "  ▶  Ouvert sur http://localhost:$PORT"
echo "  •  Garde cette fenêtre ouverte pendant que tu navigues."
echo "  •  Ferme-la (ou Ctrl+C) pour arrêter le serveur."
echo ""
wait $SRV
