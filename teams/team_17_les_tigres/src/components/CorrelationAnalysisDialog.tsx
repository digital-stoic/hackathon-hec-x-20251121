import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

interface CorrelationAnalysisDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface CorrelationData {
  asset1: string;
  asset2: string;
  correlation: number;
  risk: "Faible" | "Modéré" | "Élevé";
  recommendation: string;
}

const correlationData: CorrelationData[] = [
  {
    asset1: "Actions Tech",
    asset2: "Actions Sectorielles",
    correlation: 0.78,
    risk: "Élevé",
    recommendation: "Diversification recommandée",
  },
  {
    asset1: "Immobilier Paris",
    asset2: "Immobilier Province",
    correlation: 0.65,
    risk: "Modéré",
    recommendation: "Surveillance nécessaire",
  },
  {
    asset1: "Actions Tech",
    asset2: "Obligations",
    correlation: -0.12,
    risk: "Faible",
    recommendation: "Excellent équilibre",
  },
  {
    asset1: "Crypto",
    asset2: "Actions Tech",
    correlation: 0.54,
    risk: "Modéré",
    recommendation: "Ajuster l'allocation",
  },
  {
    asset1: "Immobilier",
    asset2: "Liquidités",
    correlation: 0.08,
    risk: "Faible",
    recommendation: "Bonne diversification",
  },
  {
    asset1: "Actions",
    asset2: "Crypto",
    correlation: 0.48,
    risk: "Modéré",
    recommendation: "Considérer réduction crypto",
  },
];

// Matrice de corrélation pour la visualisation
const assets = [
  "Portfolio",
  "Immobilier",
  "Actions Tech",
  "Obligations",
  "Crypto",
  "SCPI",
  "Liquidités",
];

const correlationMatrix: number[][] = [
  [1.0, 0.26, 0.42, -0.18, 0.33, 0.15, -0.05],
  [0.26, 1.0, 0.15, -0.06, 0.08, 0.65, 0.12],
  [0.42, 0.15, 1.0, -0.12, 0.54, 0.23, -0.08],
  [-0.18, -0.06, -0.12, 1.0, -0.15, -0.09, 0.35],
  [0.33, 0.08, 0.54, -0.15, 1.0, 0.11, 0.18],
  [0.15, 0.65, 0.23, -0.09, 0.11, 1.0, 0.06],
  [-0.05, 0.12, -0.08, 0.35, 0.18, 0.06, 1.0],
];

export const CorrelationAnalysisDialog = ({
  open,
  onOpenChange,
}: CorrelationAnalysisDialogProps) => {
  const [showMatrix, setShowMatrix] = useState(false);

  const getCorrelationColor = (correlation: number) => {
    const abs = Math.abs(correlation);
    if (abs >= 0.7) return "text-red-600 dark:text-red-400";
    if (abs >= 0.4) return "text-orange-600 dark:text-orange-400";
    return "text-green-600 dark:text-green-400";
  };

  const getRiskBadgeVariant = (risk: string) => {
    if (risk === "Élevé") return "destructive";
    if (risk === "Modéré") return "secondary";
    return "outline";
  };

  const getHeatmapColor = (value: number) => {
    if (value === 1.0) return "bg-[#8B1538] text-white"; // Dark red for diagonal
    if (value >= 0.7) return "bg-[#D94452] text-white";
    if (value >= 0.5) return "bg-[#E88B7B] text-gray-900";
    if (value >= 0.3) return "bg-[#F4C2A4] text-gray-900";
    if (value >= 0.1) return "bg-[#FDE5D4] text-gray-900";
    if (value >= -0.1) return "bg-gray-100 text-gray-900";
    if (value >= -0.3) return "bg-[#D4E8F4] text-gray-900";
    if (value >= -0.5) return "bg-[#9BCCE5] text-gray-900";
    return "bg-[#5AA5D6] text-white";
  };

  if (showMatrix) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              Corrélations entre indicateurs
            </DialogTitle>
            <DialogDescription>
              Matrice de corrélation des actifs
            </DialogDescription>
          </DialogHeader>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              💡 <strong>Astuce :</strong> Cliquez sur le bouton ci-dessous pour voir la matrice en tableau détaillé.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg border overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid" style={{ gridTemplateColumns: `140px repeat(${assets.length}, 1fr)` }}>
                  {/* Header row */}
                  <div className="p-2"></div>
                  {assets.map((asset, i) => (
                    <div
                      key={`header-${i}`}
                      className="p-2 text-xs font-medium text-center transform -rotate-45 origin-left"
                      style={{ height: "100px" }}
                    >
                      <span className="inline-block whitespace-nowrap">{asset}</span>
                    </div>
                  ))}

                  {/* Matrix rows */}
                  {assets.map((rowAsset, rowIndex) => (
                    <>
                      <div
                        key={`row-label-${rowIndex}`}
                        className="p-2 text-xs font-medium text-right pr-3 flex items-center justify-end border-t border-border/50"
                      >
                        {rowAsset}
                      </div>
                      {correlationMatrix[rowIndex].map((value, colIndex) => (
                        <div
                          key={`cell-${rowIndex}-${colIndex}`}
                          className={`p-3 text-xs font-mono font-bold text-center flex items-center justify-center border-t border-l border-border/30 transition-all hover:scale-110 hover:z-10 ${getHeatmapColor(
                            value
                          )}`}
                        >
                          {value.toFixed(2)}
                        </div>
                      ))}
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-muted/50 p-4 rounded-lg">
              <div>
                <p className="text-sm font-medium mb-1">Légende de corrélation</p>
                <div className="flex gap-2 text-xs">
                  <span className="text-red-600 font-bold">1.0 = Corrélation parfaite</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-gray-600">0.0 = Aucune corrélation</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-blue-600 font-bold">-1.0 = Corrélation inverse</span>
                </div>
              </div>
              <Button
                onClick={() => setShowMatrix(false)}
                variant="outline"
                size="sm"
              >
                Voir le tableau détaillé
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Analyse des Corrélations
          </DialogTitle>
          <DialogDescription>
            Matrice de corrélation entre vos différents actifs patrimoniaux
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-foreground">
                Coefficient de corrélation global
              </h3>
              <Button
                onClick={() => setShowMatrix(true)}
                variant="outline"
                size="sm"
              >
                <Maximize2 className="w-4 h-4 mr-2" />
                Voir la matrice complète
              </Button>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-mono font-bold text-champagne">
                0.42
              </span>
              <span className="text-sm text-muted-foreground">
                (Diversification satisfaisante)
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Un coefficient proche de 0 indique une bonne diversification. Au-dessus de 0.7, vos actifs évoluent de manière trop similaire.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">
              Analyse détaillée par paires d'actifs
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Actif 1</TableHead>
                  <TableHead>Actif 2</TableHead>
                  <TableHead className="text-center">Corrélation</TableHead>
                  <TableHead className="text-center">Niveau de risque</TableHead>
                  <TableHead>Recommandation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {correlationData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.asset1}</TableCell>
                    <TableCell className="font-medium">{row.asset2}</TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`font-mono font-bold text-lg ${getCorrelationColor(
                          row.correlation
                        )}`}
                      >
                        {row.correlation > 0 ? "+" : ""}
                        {row.correlation.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getRiskBadgeVariant(row.risk) as any}>
                        {row.risk}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.recommendation}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              Points d'attention
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1.5">
              <li>
                • Forte corrélation Actions Tech / Actions Sectorielles (0.78) - Envisager une réduction de l'exposition tech
              </li>
              <li>
                • Corrélation modérée Immobilier Paris / Province (0.65) - Exposition géographique à surveiller
              </li>
              <li>
                • Excellente décorrélation Actions Tech / Obligations (-0.12) - Maintenir cet équilibre
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
