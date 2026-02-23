import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface CreateJobApplicationDialogProp {
    columnId: string;
    boardId: string;
}

export default function CreateJobApplicationDialog({ 
    columnId, 
    boardId 
}: CreateJobApplicationDialogProp) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Add Job
                    <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Job Application</DialogTitle>
                    <DialogDescription>Track a new job application</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="company">Company *</label>
                                <Input id="company" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="position">Position *</label>
                                <Input id="position" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="location">Location</label>
                                <Input id="location" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="salary">Salary</label>
                                <Input id="salary" placeholder="e.g. £100k - £150k" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="jobUrl">Job URL</label>
                            <Input id="jobUrl" placeholder="https://..." />
                        </div>

                        <div>
                            <label htmlFor="tags">Tags (comma-separated)</label>
                            <Input id="tags" placeholder="React, Tailwind, High Pay" />
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <Textarea 
                                id="description" 
                                rows={3}
                                placeholder="A brief description of the role..." 
                            />
                        </div>

                        <div>
                            <label htmlFor="notes">Notes</label>
                            <Textarea 
                                id="notes" 
                                rows={4}
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button 
                            type="button"
                            variant="outline"
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            Add Application
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}